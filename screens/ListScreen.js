import React from 'react';
import { ScrollView, StyleSheet,Text,Image } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { Button } from 'native-base';
import SvgUri from 'react-native-svg-uri'

import  DrinkDeck from '../components/DrinkDeck'
export default class ListScreen extends React.Component {
  static navigationOptions = {
    title: 'List',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <DrinkDeck title='Gin'></DrinkDeck>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
