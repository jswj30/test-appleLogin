import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const MainScreen = ({ navigation }) => {

  const handlePress = () => {
    navigation.navigate('Home');
    // navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Main</Text>
      <TouchableOpacity onPress={handlePress} style={styles.button}>
        <Text style={styles.text}>Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
  }, 
  text: {
    fontSize: 24, 
    color: '#222', 
  }, 
  button: {
    backgroundColor: 'blue', 
    width: '25%', 
    height: '7%',
    justifyContent: 'center', 
    alignItems: 'center', 
    borderRadius: 10, 
    elevation: 20, 
  }
})

export default MainScreen;