/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import type {Node} from 'react';
import NoteList from './components/NoteList'
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';


const MainScreen: ({navigation, route}) => Node = ({navigation, route}) => {
  const user = route.params.user;
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/note_banner.jpg')}
        style={styles.banner}></Image>
      <Text style={styles.title}>Note for {user}</Text>
      <NoteList></NoteList>
      <TouchableOpacity style={styles.floating} onPress={() => navigation.navigate('CreateNote', {creator: user})}>
        <Image source={require('./assets/ic_add.png')} style={styles.actionBtn}>

        </Image>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyCenter: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  banner: {
    width: '100%',
    height: '20%',
  },
  title: {
    width: '100%',
    textAlign: 'center',
    margin: 10,
    fontSize: 20,
    fontWeight: 'bold'
  },
  actionBtn: {
    width: 60,
    height: 60
  },
  floating: {
    position: 'absolute',
    bottom: 30,
    right: 15,
    zIndex: 2
  }
});

export default MainScreen;
