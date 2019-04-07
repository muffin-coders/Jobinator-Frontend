import React from 'react';
import _ from 'lodash';

import {
  Image,
  ScrollView, default as Share,
  StyleSheet,
  View,
} from 'react-native';
import {
  Button,
  Text,
} from 'react-native-elements';
import Settings from '../constants/Settings';

import {ProgressBar, Colors, Snackbar} from 'react-native-paper';

global.currentUser = null;
global.language = 'Deutsch';
global.langCode = 'de';
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
    maxAmountJobs: 0,
    currentAmountJobs: 0,
  };

  constructor(props) {
    super(props);
    this.initUser();
  }

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
          <Text h4 style={styles.question}>Finde deinen Job ganz einfach durch beantworten von ein paar ganz einfachen
            Fragen</Text>
          }
          {!this.state.isWelcome &&
          <Text h3 style={styles.question}>{this.state.questions.question}</Text>
          }

          {this.state.isWelcome &&
          <Button title={"JETZT LOS LEGEN!"} onPress={() => this.initButton()} loading={this.state.isLoading}
                  style={styles.callToAction}/>
          }
          <ScrollView>
            {this.renderButtons()}
          </ScrollView>
        </View>
        {!this.state.isWelcome &&
        <Button
          title="Zu meinen Jobs"
          type="outline"
          onPress={() =>
            this.props.navigation.navigate('Job')
          }
        />
        }
        {!this.state.isWelcome &&
        <ProgressBar progress={this.state.progress} color={Colors.red800}/>
        }
        {this.state.currentAmountJobs !== 0 &&
        <Text style={styles.textSmall}>{this.state.currentAmountJobs} von {this.state.maxAmountJobs} vorhanden</Text>
        }
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
    fetch(Settings.backend + '/users/' + global.currentUser + '/questions/' + this.state.questions.questionId
      + '/answer/' + id, {
      method: 'POST',
    }).then((response) => response.json()).then((responseJson) => {
      console.log(responseJson);
      this.setState({
        progress: 1.0 - (responseJson.currentAmountJobs / responseJson.maxAmountJobs),
        currentAmountJobs: responseJson.currentAmountJobs,
        maxAmountJobs: responseJson.maxAmountJobs,
      });
    });
    console.log(id);
    this.loadButton();
  };

  loadButton = event => {
    console.log(global.currentUser);
    if (global.currentUser === undefined || global.currentUser == null) {
      this.setState({errorShow: true});
      this.setState({errorText: "User konnte nicht erstellt werden, bitte warten"});
      this.initUser();
      this.setState({isLoading: false});
    } else {
      console.log("load questions");
      fetch(Settings.backend + '/users/' + global.currentUser + '/questions', {
        method: 'GET',
      })
        .then((response) => response.json())
        .then((responseJson) => {
          if (global.langCode === 'de' || responseJson.questionId === -1) {
            this.setState({isWelcome: false});
            this.setState({questions: responseJson});
            this.setState({isLoading: false});
          } else {
            console.log("Change Language");
            console.log(responseJson);

            // /translation/questions/{questionId}/{lang}
            fetch(Settings.backend + '/translation/questions/' + responseJson.questionId + '/' + global.langCode, {
              method: 'GET',
            })
              .then((response) => response.json())
              .then((responseJson) => {
                  console.log(responseJson);
                  console.log(responseJson.question);
                  this.setState({isLoading: false});
                  this.setState({questions: responseJson});
                  this.setState({isWelcome: false});


                  let component = this;
                  responseJson.answers.forEach(function (entry) {
                    // /translation/answers/{answer}/{lang}
                    fetch(Settings.backend + '/translation/answers/' + entry.answerId + '/' + global.langCode, {
                      method: 'GET',
                    }).then((response) => response.json())
                      .then((responseJson) => {
                        component.setState({errorShow: true});
                        component.setState({errorText: responseJson.answerText});
                        // component.state.questions.answers.push(responseJson);
                        // component.questions.answers.forEach(function (entryJson) {
                        //   console.log("Hoo")
                        //   console.log(entry)
                        //   console.log(entryJson)
                        //   if (entryJson.answerId === entry.answerId) {
                        //     entry.answerText = entryJson.answerText;
                        //     console.log(entry)
                        //   }
                        // })
                      });
                    console.log(entry);
                  });
                }
              )
          }
        })
        .catch((error) => {
          this.setState({errorShow: true});
          this.setState({errorText: "Keine Datenanbingung"});
        });
    }
  };

  initUser() {
    fetch(Settings.backend + '/users', {
      method: 'POST',
    })
      .then((response) => response.json())
      .then((responseJson) => {
        global.currentUser = responseJson.userId;
        console.log(global.currentUser);
      })
      .catch((error) => {
        this.setState({errorShow: true});
        this.setState({errorText: "Keine Datenanbingung"});
      });
  }

  initButton() {
    this.setState({isLoading: true});
    this.loadButton();
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
  },
  callToAction: {
    paddingTop: 50,
    fontFamily: 'nunito-bold',
  }
});
