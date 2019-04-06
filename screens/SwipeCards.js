'use strict';

import React from 'react';
import {StyleSheet, Text, View, Image, Modal} from 'react-native';
import {
  Button, Card as CardView
} from 'react-native-elements';

import SwipeCards from 'react-native-swipe-cards';
import Settings from "../constants/Settings";

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    modalVisible: false,
    preview: null,
  };

  modalButtonPressed() {
    fetch(Settings.backend + '/job/' + currentUser + '/users/previews/' + this.props.jobPreviewId + '/detail', {
      method: 'POST',
    })
        .then((response) => response.json())
        .then((responseJson) => {
          let preview = responseJson;
          console.log("clickJob");
          console.log(preview);

          this.setState({
            preview: preview,
          });
          this.setState({modalVisible: true});
        });
    return undefined;
  }

  render() {

    return (
      <View style={styles.card}>
        <Image style={styles.thumbnail} source={{uri: this.props.image}}/>
        <Text style={styles.text}>{this.props.jobTitle}</Text>
        <Button
          title="Job Info anzeigen"
          type="clear"
          onPress={() => this.modalButtonPressed()}
        />
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          >
          <View>
            <View style={{ height: 700, marginTop: 22 }}>
              <CardView style={{ height: 700 }}>
                <Text style={{ height: 600 }}>{this.state.preview.jobText}</Text>

                <Button
                  title={"schliessen"}
                  onPress={() => {
                    this.setState({modalVisible: !this.state.modalVisible});
                  }} style={styles.buttonbottom}>
                  <Text>Hide Modal</Text>

                </Button>
              </CardView>
            </View>
          </View>
        </Modal>
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

let cards = [];
let hasNextCard = true;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: cards,
      outOfCards: false,
      isReady: false
    };
    this.fetchNewCards();
  }

  fetchNewCards() {
    //let currentUser = 1;
    fetch(Settings.backend + '/job/users/' + currentUser + '/previews/next', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((responseJson) => {
        let card = responseJson;
        console.log("fetchNewCards");
        console.log(card);
        //console.log(card[0].isLast);
if (card[0] !== undefined) {
  this.setState({isReady: true});
  if (hasNextCard) {
    this.setState({
      cards: this.state.cards.concat(card),
    });
    hasNextCard = !card[0].isLast;
  } else {
    this.setState({outOfCards: true});
  }
}
      });
  }

  handleYup(card) {
    console.log("Gefällt mir")
  }

  handleNope(card) {
    console.log("Gefällt mir nicht")
  }

  handleMaybe(card) {

  }

  handleClick(card) {
    console.log("Click")
  }

  cardRemoved(index) {
    console.log("Karte");
    console.log(cards);
    this.fetchNewCards();
  }

  render() {
    return (
      <SwipeCards
        cards={this.state.cards}
        loop={false}

        renderCard={(cardData) => <Card {...cardData} navigator={this.props.navigator}/>}
        renderNoMoreCards={() => <NoMoreCards navigator={this.props.navigator}/>}
        showYup={true}
        showNope={true}
        showMaybe={true}

        hasMaybeAction={true}
        yupText={"Gefällt mir"}
        nopeText={"Gefällt mir nicht"}
        maybeText={"Favoritisieren"}

        onClickHandler={this.handleClick}

        handleYup={this.handleYup}
        handleNope={this.handleNope}
        handleMaybe={this.handleMaybe}
        cardRemoved={this.cardRemoved.bind(this)}
      />
    );
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
  buttonbottom: {
      //position: 'absolute',
      //bottom: 22,

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
});