import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>test</Text>
    </View>
  );
};

const Stack = create

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
  }, 
  text: {
    fontSize: 24, 
    color: '#222', 
  }
})

export default App;