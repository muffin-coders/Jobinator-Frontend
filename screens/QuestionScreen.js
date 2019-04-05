import React from 'react';
import _ from 'lodash';

import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {
  Button,
  Text,
} from 'react-native-elements';
import Settings from '../constants/Settings';

export default class QuestionScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    questions: {},
    answers: {},
    isWelcome: true,
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <Text h1 style={styles.title}>Jobinator</Text>
          {this.state.isWelcome &&
          <Text h3 style={styles.question}>Willkommen</Text>
          }
          {!this.state.isWelcome &&
          <Text h3 style={styles.question}>{this.state.questions.question}</Text>
          }

          {this.renderButtons()}

          {this.state.isWelcome &&
          <Button title={"Start"} onPress={() => this.loadButton()}/>
          }
        </ScrollView>
      </View>
    );
  }

  loadButton = event => {
    console.log("load questions");
    fetch(Settings.backend + '/users/2/questions', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({questions: responseJson});
        this.setState({isWelcome: false});
      })
      .catch((error) => {
        console.error(error);
      });
  };

  select = (id) => {
    fetch(Settings.backend + '/users/2/questions/' + this.state.questions.questionId
      + '/answer/' + id, {
      method: 'POST',
    });
    console.log(id);
    this.loadButton();
  };

  renderButtons() {
    return _.map(this.state.questions.answers, (answers) => {
      return (
        <Button title={answers.answerText} style={styles.question} key={answers.answerId}
                onPress={() => this.select(answers.answerId)}/>
      )
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
  title: {
    fontFamily: 'nunito',
    textAlign: 'center',
    padding: 20,
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
  }
});
