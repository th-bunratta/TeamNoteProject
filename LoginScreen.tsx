/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import type {Node} from 'react';
import {
  Alert,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  ImageBackground,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Login from './components/Login';
import {NavigationRouteContext} from '@react-navigation/native';

const LoginScreen: ({navigation}) => Node = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const doLogin = () => {
    if (username == 'staff' && password == 'text') {
      Alert.alert('Login successfully');
      navigation.navigate('Main', {user: username});
    } else {
      Alert.alert('Failed to log in!');
    }
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.bgLogin}
        source={require('./assets/note_bg.jpg')}>
        <Login
          onLogin={doLogin}
          onUsernameChanged={uname => setUsername(uname)}
          onPasswordChanged={pwd => setPassword(pwd)}></Login>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyCenter: 'center',
    alignItems: 'center',
  },
  bgLogin: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoginScreen;
