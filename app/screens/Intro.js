import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import COLORS from '../misc/COLORS';
import RoundIconBtn from '../components/RoundIconBtn';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Intro = () => {
  const [name, setName] = useState('');
  const handleSubmit = async () => {
    try {
      const user = {name: name};
      // console.log(user);
      await AsyncStorage.setItem('user', JSON.stringify(user));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <StatusBar hidden />
      <View style={styles.container}>
        <Text style={styles.inputTitle}>Enter your name to continue</Text>
        <TextInput
          value={name}
          onChangeText={text => setName(text)}
          style={styles.textInput}
          placeholder={'Enter Name...'}
        />
        {name.trim().length > 2 && (
          <RoundIconBtn antIconName={'arrowright'} onPress={handleSubmit} />
        )}
      </View>
    </>
  );
};

const width = Dimensions.get('window').width - 40;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    width,
    paddingLeft: 15,
    borderWidth: 2,
    borderColor: COLORS.PRIMARY,
    borderRadius: 12,
    height: 50,
    fontSize: 20,
    color: COLORS.PRIMARY,
    marginBottom: 15,
  },
  inputTitle: {
    alignSelf: 'flex-start',
    paddingLeft: 25,
    marginBottom: 5,
    opacity: 0.5,
  },
});

export default Intro;
