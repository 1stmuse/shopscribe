import {Pressable, StyleSheet, View} from 'react-native';
import React from 'react';
import {widthPixel} from '@utility/pxToDpConvert';
import colors from '@utility/colors';
import Header from '@components/header';
import {Spacer} from '@components/view';
import {Paragraph} from '@components/text/text';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import {nav} from '../../../types';
import {HomeScreenParam} from '@navigation/dashboard/screens';

const Security = () => {
  const {navigate} = useNavigation<nav<HomeScreenParam>>();
  return (
    <View style={styles.main}>
      <Header title="Security" />

      <Spacer height={35} />
      <Pressable onPress={() => navigate('ChangePassword')} style={styles.item}>
        <Paragraph>Password</Paragraph>
        <Entypo name="chevron-right" size={20} />
      </Pressable>
      <Spacer />
      <Pressable onPress={() => navigate('ChangePin')} style={styles.item}>
        <Paragraph>Transaction PIN</Paragraph>
        <Entypo name="chevron-right" size={20} />
      </Pressable>
    </View>
  );
};

export default Security;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingHorizontal: widthPixel(20),
    backgroundColor: colors.white,
  },
  item: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: colors.border,
    paddingVertical: 15,
  },
});
