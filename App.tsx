import {Text, StyleSheet, View, ScrollView} from 'react-native';
import React, {Component} from 'react';

export default class App extends Component {
  render() {
    return (
      <ScrollView>
        <View>
          <Text style={styles.space}>Test</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  space: {
    padding: 10,
    color: '#000000',
  },
});
