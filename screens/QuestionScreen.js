import React from 'react';
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

let buttonList = [];
export default class QuestionScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    question: "Willkommen",
    buttonText: "Start",
    buttonList
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <Text h1 style={styles.title}>Jobinator</Text>
          <Text h3 style={styles.question}>{this.state.question}</Text>
          <Button title={this.state.buttonText} onPress={this.loadButton.bind(this)}/>
        </ScrollView>
      </View>
    );
  }

  loadButton = event => {

    fetch(Settings.backend + '/users/2/questions', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({question: responseJson.question})
        this.setState({buttonText: "Weiter"});
      })
      .catch((error) => {
        console.error(error);
      });
  };
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
    textAlign: 'center',
    padding: 20,
  },
  question: {
    textAlign: 'center',
    paddingBottom: 10,
    paddingTop: 10,
  },
  button: {
    paddingTop: 10,
  }
});
