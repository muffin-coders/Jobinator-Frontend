import React from 'react';
import _ from 'lodash';

import {
  Image,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {
  Button,
  Text,
} from 'react-native-elements';
import Settings from '../constants/Settings';

import {ProgressBar, Colors, Snackbar} from 'react-native-paper';

let currentUser;

export default class QuestionScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    questions: {},
    answers: {},
    isWelcome: true,
    isLoading: false,
    progress: 0.0,
    errorShow: false,
    errorText: "",
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
              source={require('../assets/images/jobi.png')}
              style={styles.welcomeImage}
            />
          </View>
          {this.state.isWelcome &&
          <Text h3 style={styles.question}>Willkommen</Text>
          }
          {!this.state.isWelcome &&
          <Text h3 style={styles.question}>{this.state.questions.question}</Text>
          }
          {this.state.isWelcome &&
          <Button title={"Start"} onPress={() => this.initUser()} loading={this.state.isLoading}/>
          }

          <ScrollView>
          {this.renderButtons()}
          </ScrollView>
        </View>
        {this.state.isWelcome &&
        <Text h6 style={styles.textSmall}>Finde deinen Job ganz einfach durch ein beantworten von ein paar
          fragen.</Text>
        }
        {!this.state.isWelcome &&
        <Button
          title="Zu meinen Jobs"
          type="outline"
          onPress={() =>
            this.props.navigator.navigate('Job')
          }
        />
        }
        <ProgressBar progress={this.state.progress} color={Colors.red800}/>
        <Snackbar
          visible={this.state.errorShow}
          onDismiss={() => this.setState({errorShow: false})}
          action={{
            label: 'ok',
            onPress: () => {
              // Do something
            },
          }}
        >
          {this.state.errorText}
        </Snackbar>
      </View>
    );
  }

  renderButtons() {
    return _.map(this.state.questions.answers, (answers) => {
      return (
        <Button title={answers.answerText} style={styles.question} key={answers.answerId}
                onPress={() => this.select(answers.answerId)} loading={this.state.isLoading}/>
      )
    });
  }

  select = (id) => {
    this.setState({isLoading: true});
    fetch(Settings.backend + '/users/' + currentUser + '/questions/' + this.state.questions.questionId
      + '/answer/' + id, {
      method: 'POST',
    });
    console.log(id);
    this.loadButton();
  };

  loadButton = event => {
    console.log("load questions");
    fetch(Settings.backend + '/users/' + currentUser + '/questions', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({isWelcome: false});
        this.setState({questions: responseJson});
        console.log(this.state.questions);
        this.setState({isLoading: false});
      })
      .catch((error) => {
        this.setState({errorShow: true});
        this.setState({errorText: "Keine Datenanbingung"});
      });
  };

  initUser() {
    this.setState({isLoading: true});
    this.setState({progress: 0.1});
    fetch(Settings.backend + '/users', {
      method: 'POST',
    })
      .then((response) => response.json())
      .then((responseJson) => {
        currentUser = responseJson.userId;
        console.log(currentUser);
        this.loadButton();
      })
      .catch((error) => {
        this.setState({errorShow: true});
        this.setState({errorText: "Keine Datenanbingung"});
      });
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  question: {
    fontFamily: 'nunito',
    textAlign: 'center',
    paddingBottom: 10,
    paddingTop: 10,
  },
  button: {
    fontSize: 40,
    fontFamily: 'nunito',
    paddingTop: 10,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 600,
    height: 100,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  textSmall: {
    fontFamily: 'nunito',
    textAlign: 'center',
  }
});
