/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import {widthPixel} from '@utility/pxToDpConvert';
import {FlexedView, Spacer, ViewContainer} from '@components/view';
import {Paragraph} from '@components/text/text';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import colors from '@utility/colors';
import useAppColor from '@hooks/useAppColor';
import {AppTextInput} from '@components/TextInput';
import {useNavigation} from '@react-navigation/native';
import {nav} from '../../types';
import {HomeScreenParam} from '@navigation/dashboard/screens';

const Location: React.FC = () => {
  const {goBack} = useNavigation<nav<HomeScreenParam>>();
  const appColor = useAppColor();
  return (
    <View style={styles.container}>
      <ViewContainer style={{flex: 1}}>
        <Spacer />
        <ScrollView>
          <FlexedView justifyContent="space-between">
            <Paragraph fontSize={17} lineHeight={21} fontWeight="600">
              Your Address
            </Paragraph>
            <TouchableOpacity onPress={goBack} style={styles.circle}>
              <AntDesign
                name="close"
                size={24}
                color={appColor['black-shade']}
              />
            </TouchableOpacity>
          </FlexedView>
          <Spacer />
          <AppTextInput
            value=""
            placeholder="Search"
            containerStyle={{
              backgroundColor: appColor.border,
              borderRadius: 8,
            }}
            leftIcon={<EvilIcons name="search" size={25} />}
          />
          <Spacer height={3} />
          <FlexedView>
            <EvilIcons name="location" size={25} color={appColor.primary} />
            <Paragraph
              fontSize={15}
              style={{marginLeft: 4}}
              color={appColor.primary}>
              Use my current address
            </Paragraph>
          </FlexedView>
        </ScrollView>
      </ViewContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  circle: {
    width: widthPixel(35),
    height: widthPixel(35),
    borderRadius: widthPixel(35) / 2,
    backgroundColor: colors.border,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Location;
