import React from 'react';
import {Alert, Button, StyleSheet, View, Text, TextInput} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
  },
  headerTxt: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  inputBox: {
    fontSize: 16,
    textAlign: 'left',
    margin: 10,
    borderWidth: 1,
    borderColor: '#aaaaaa',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    width: '80%',
    padding: 5,
  },
});

const logIn = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTxt}>Welcome to Team Note</Text>
      <TextInput
        style={styles.inputBox}
        placeholder="username"
        autoCapitalize="none"
        onChangeText={value => props.onUsernameChanged(value)}></TextInput>
      <TextInput
        style={styles.inputBox}
        placeholder="password"
        secureTextEntry={true}
        onChangeText={value => props.onPasswordChanged(value)}></TextInput>
      <Button title="Log In" onPress={props.onLogin}></Button>
    </View>
  );
};
export default logIn;
