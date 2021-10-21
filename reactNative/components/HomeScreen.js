import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { appleAuthAndroid, AppleButton } from '@invertase/react-native-apple-authentication';
import 'react-native-get-random-values';
import { v4 as uuid } from 'uuid'

const HomeScreen = ({ navigation }) => {

  const onAppleButtonPress = async () => {
    const rawNonce = uuid();
    const state = uuid();

    appleAuthAndroid.configure({
      clientId: 'com.example.client-android',
      redirectUri: 'https://example.com/auth/callback', 
      responseType: appleAuthAndroid.ResponseType.ALL, 
      scope: appleAuthAndroid.Scope.ALL, 
      nonce: rawNonce, 
      state,  
    });

    const response = await appleAuthAndroid.signIn();

  }

  const handlePress = () => {
    navigation.navigate('Main');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>

      {/* <TouchableOpacity onPress={handlePress} style={styles.button}>
        <Text style={styles.text}>Button</Text>
      </TouchableOpacity> */}

      <TouchableOpacity onPress={() => onAppleButtonPress()} style={styles.button}>
        <Text style={styles.text}>Button</Text>
      </TouchableOpacity>

      {/* <AppleButton 
        buttonStyle={AppleButton.Style.WHITE}
        buttonType={AppleButton.Type.SIGN_IN}
        onPress={() => onAppleButtonPress()}
      /> */}
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

export default HomeScreen;