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
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
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

          {this.renderButtons()}

          {this.state.isWelcome &&
          <Button title={"Start"} onPress={() => this.initUser()} loading={this.state.isLoading}/>
          }
        </ScrollView>
      </View>
    );
  }

  renderButtons() {
    return _.map(this.state.questions.answers, (answers) => {
      return (
        <Button title={answers.answerText} style={styles.question} key={answers.answerId}
                onPress={() => this.select(answers.answerId)}/>
      )
    });
  }

  select = (id) => {
    fetch(Settings.backend + '/users/2/questions/' + this.state.questions.questionId
      + '/answer/' + id, {
      method: 'POST',
    });
    console.log(id);
    this.loadButton();
  };

  loadButton = event => {
    console.log("load questions");
    fetch(Settings.backend + '/users/2/questions', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({isWelcome: false});
        currentUser = responseJson;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  initUser(){
    this.setState({isLoading: true});
    fetch(Settings.backend + '/users/', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((responseJson) => {
        // this.setState({questions: responseJson});
        // this.setState({isWelcome: false});
        this.loadButton();
      })
      .catch((error) => {
        console.log(error);
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
});
