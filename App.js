import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Button from './src/core-ui/Button';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          type="CANCEL"
          leftIcon="ios-add-circle"
          onClick={() => {
            console.log('woo');
          }}
        />
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
