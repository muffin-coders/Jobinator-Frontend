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
    preview: {jobText: "", jobTitle: "",},
  };

  modalButtonPressed() {
    fetch(Settings.backend + '/job/' + currentUser + '/users/previews/' + this.props.jobPreviewId + '/detail', {
      method: 'POST',
    })
      .then((response) => response.json())
      .then((responseJson) => {
        let previews = responseJson;
        console.log(this.props.jobPreviewId);
        console.log("clickJob");
        console.log(previews);

        this.setState({
          preview: previews,
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
            <View style={{height: 700, marginTop: 22}}>
              <CardView style={{height: 700}}>
                <Text style={{height: 600}}>{this.state.preview.jobText}</Text>

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
    console.log("fetchNewCardsMethod");
    console.log(global.currentUser);
    fetch(Settings.backend + '/job/users/' + global.currentUser + '/previews/next', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((responseJson) => {
        let card = responseJson;
        console.log("fetchNewCards");
        console.log(card);

        if (card[0] !== undefined) {
          this.setState({isReady: true, outOfCards: false});
          if (hasNextCard) {
            this.setState({
              cards: card,
            });
            hasNextCard = !card[0].isLast;
          } else {
            this.setState({outOfCards: true});
          }
        }
      });
  }

  handleYup(card) {
    console.log("Gefällt mir");
    fetch(Settings.backend + '/job/' + global.currentUser + '/users/previews/' + card.jobPreviewId + '/like', {
      method: 'POST',
    }).finally(response => {
      this.fetchNewCards();
    })
  }

  handleNope(card) {
    console.log("Gefällt mir nicht");
    fetch(Settings.backend + '/job/' + global.currentUser + '/users/previews/' + card.jobPreviewId + '/dislike', {
      method: 'POST',
    }).finally(response => {
      this.fetchNewCards();
    })
  }

  handleMaybe(card) {
    fetch(Settings.backend + '/job/' + global.currentUser + '/users/previews/' + card.jobPreviewId + '/favorite', {
      method: 'POST',
    }).finally(response => {
      this.fetchNewCards();
    })
  }

  handleClick(card) {
    console.log("Click")
  }

  cardRemoved(index) {
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

        handleYup={this.handleYup.bind(this)}
        handleNope={this.handleNope.bind(this)}
        handleMaybe={this.handleMaybe.bind(this)}
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