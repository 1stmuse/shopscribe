import {StyleSheet, View} from 'react-native';
import React from 'react';
import colors from '@utility/colors';
import {widthPixel} from '@utility/pxToDpConvert';
import Header from '@components/header';

const ChangePin = () => {
  return (
    <View style={styles.main}>
      <Header title="Change PIN" />
    </View>
  );
};

export default ChangePin;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingHorizontal: widthPixel(20),
    backgroundColor: colors.white,
  },
});
