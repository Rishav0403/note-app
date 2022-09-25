import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import COLORS from '../misc/COLORS';
import SearchBar from '../components/SearchBar';
import RoundIconBtn from '../components/RoundIconBtn';

const NoteScreen = ({user}) => {
  const [greetMsg, setGreetMsg] = useState('Morning');

  const findGreet = () => {
    const hrs = new Date().getHours();
    if (hrs === 0 || hrs < 12) {
      return setGreetMsg('Morning');
    } else if (hrs === 12 || hrs < 17) {
      return setGreetMsg('Afternoon');
    }
    return setGreetMsg('Evening');
  };

  useEffect(() => {
    findGreet();
  }, []);

  return (
    <>
      <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.LIGHT} />
      <View style={styles.container}>
        <Text style={styles.header}>{`Good ${greetMsg} ${user.name}`}</Text>
        <SearchBar containerStyle={{marginVertical: 15}} />
        <View
          style={[StyleSheet.absoluteFillObject, styles.emptyHeaderContainer]}>
          <Text style={styles.emptyHeader}>Add Notes</Text>
          <RoundIconBtn antIconName={'plus'} style={styles.addBtn} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    // backgroundColor: 'red',
    flex: 1,
  },
  header: {
    marginTop: 5,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
  },
  emptyHeaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: -1,
  },
  emptyHeader: {
    fontSize: 30,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    opacity: 0.5,
    color: COLORS.DARK,
  },
  addBtn: {
    position: 'absolute',
    right: 25,
    bottom: 40,
    elevation: 10,
  },
});

export default NoteScreen;
