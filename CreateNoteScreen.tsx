import React, {useState} from 'react';
import {Alert,Button, StyleSheet, View, TextInput} from 'react-native';
import Firestore from '@react-native-firebase/firestore'
import { StackActions } from '@react-navigation/native'

const CreateNoteScreen = ({navigation, route}) => {
  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');
  const noteCreator = route.params.creator
  const addNote = () => {
    Firestore().collection('teamnotes').add({
      note_title: title,
      note_detail: detail,
      creator: noteCreator
    }).then(() => {
      Alert.alert('Note added!');
      const popAction = StackActions.pop(1);
      navigation.dispatch(popAction)
    })
  }
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputBox}
        placeholder="Title"
        onChangeText={value => setTitle(value)}></TextInput>
      <TextInput
        style={styles.areaBox}
        placeholder="Detail"
        multiline={true}
        numberOfLines={4}
        onChangeText={value => setDetail(value)}></TextInput>
      <Button title="Create Note" onPress={() => addNote()}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyCenter: 'center',
    alignItems: 'center',
  },
  inputBox: {
    fontSize: 20,
    textAlign: 'left',
    margin: 10,
    borderColor: '#aaaaaa',
    borderWidth: 1,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    width: '80%',
    padding: 5,
  },
  areaBox: {
    fontSize: 16,
    textAlign: 'left',
    margin: 10,
    borderColor: '#aaaaaa',
    borderWidth: 1,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    width: '80%',
    padding: 5,
    textAlignVertical: 'top',
  },
});

export default CreateNoteScreen;
