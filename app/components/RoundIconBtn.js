import {StyleSheet} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import COLORS from '../misc/COLORS';

const RoundIconBtn = ({antIconName, size, color, style, onPress}) => {
  return (
    <AntDesign
      name={antIconName}
      size={size || 24}
      color={color || COLORS.LIGHT}
      style={[styles.icon, {...style}]}
      onPress={onPress}
    />
  );
};

export default RoundIconBtn;

const styles = StyleSheet.create({
  icon: {
    backgroundColor: COLORS.PRIMARY,
    padding: 15,
    borderRadius: 50,
    elevation: 5,
  },
});
