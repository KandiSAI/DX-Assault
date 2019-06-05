import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  
  render() {
    return (

      <div>
        <View style={styles.container}>
          <Text onPress={}>Open up App.js to start working on your app!</Text>
        </View>
  
        <Button />

      </div>
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
//comment