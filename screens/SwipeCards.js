'use strict';

import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {
  Button,
} from 'react-native-elements';

import SwipeCards from 'react-native-swipe-cards';

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.card}>
        <Image style={styles.thumbnail} source={{uri: this.props.image}} />
        <Text style={styles.text}>This is card {this.props.name}</Text>
      </View>
    )
  }
}

class NoMoreCards extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.noMoreCards}>
        <Text>Es sind leider keine Jobs mehr verfügbar</Text>
        <Button
          title="Weiter suchen"
          type="outline"
          onPress={() =>
            this.props.navigator.navigate('Question')
          }
        />
      </View>
    )
  }
}

const cards = [
  {name: '1', image: 'https://images.pexels.com/photos/567633/pexels-photo-567633.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'},
  {name: '2', image: 'https://images.pexels.com/photos/1161465/pexels-photo-1161465.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'},
  {name: '3', image: 'https://images.pexels.com/photos/327540/pexels-photo-327540.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'},
  {name: '4', image: 'https://images.pexels.com/photos/1249158/pexels-photo-1249158.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'},
]

const cards2 = [
  {name: '10', image: 'https://images.pexels.com/photos/684387/pexels-photo-684387.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'},
]

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: cards,
      outOfCards: false
    }
  }

  handleYup (card) {
    console.log("Gefällt mir")
  }

  handleNope (card) {
    console.log("Gefällt mir nicht")
  }

  cardRemoved (index) {
    console.log(`The index is ${index}`);

    let CARD_REFRESH_LIMIT = 3

    if (this.state.cards.length - index <= CARD_REFRESH_LIMIT + 1) {
      console.log(`There are only ${this.state.cards.length - index - 1} cards left.`);

      if (!this.state.outOfCards) {
        console.log(`Adding ${cards2.length} more cards`)

        this.setState({
          cards: this.state.cards.concat(cards2),
          outOfCards: true
        })
      }

    }

  }

  render() {
    return (
      <SwipeCards
        cards={this.state.cards}
        loop={false}

        renderCard={(cardData) => <Card {...cardData} />}
        renderNoMoreCards={() => <NoMoreCards navigator={this.props.navigator} />}
        showYup={true}
        showNope={true}

        handleYup={this.handleYup}
        handleNope={this.handleNope}
        cardRemoved={this.cardRemoved.bind(this)}
      />
    )
  }
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    borderRadius: 5,
    overflow: 'hidden',
    borderColor: 'grey',
    backgroundColor: 'white',
    borderWidth: 1,
    elevation: 1,
  },
  thumbnail: {
    width: 300,
    height: 300,
  },
  text: {
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10
  },
  noMoreCards: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})