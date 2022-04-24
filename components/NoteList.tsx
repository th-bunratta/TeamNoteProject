import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import Firestore from '@react-native-firebase/firestore';

const NoteList = props => {
  const [loading, setLoading] = useState(true);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const subscriber = Firestore()
      .collection('teamnotes')
      .onSnapshot(querySnapshot => {
        const team_notes = [];
        querySnapshot.forEach(documentSnapshot => {
          team_notes.push({
            key: documentSnapshot.id,
            title: documentSnapshot.get('note_title'),
            detail: documentSnapshot.get('note_detail'),
          });
        });
        setNotes(team_notes);
        setLoading(false);
      });
    return () => subscriber();
  });
  if (loading) {
    return <ActivityIndicator />;
  }
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.noteList}
        data={notes}
        renderItem={({item}) => (
          <View style={styles.listItem}>
            <Text style={styles.title}>{item.title}</Text>
            <Text>{item.detail}</Text>
          </View>
        )}></FlatList>
    </View>
  );
};
export default NoteList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#E0F2F1',
  },
  noteList: {
    width: '100%',
    backgroundColor: '#FFFFFF',
  },
  listItem: {
    padding: 15,
    fontSize: 18,
    height: 64,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
