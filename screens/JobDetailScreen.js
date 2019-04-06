import React from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {Text, Button} from "react-native-elements";

export default class JobDetailScreen extends React.Component {
  static navigationOptions = {
    title: 'Einstellungen',
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <Button
            title="< Zurück"
            type="clear"
            onPress={() => this.props.navigator}
          />
          <Text h1>Hoi</Text>

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
});
