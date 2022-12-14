import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Intro from './app/screens/Intro';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NoteScreen from './app/screens/NoteScreen';

const App = () => {
  const [user, setUser] = useState({});
  const findUser = async () => {
    const result = await AsyncStorage.getItem('user');
    setUser(JSON.parse(result));
  };
  useEffect(() => {
    findUser();
  }, []);
  return (
    <>
      <NoteScreen user={user} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default App;
