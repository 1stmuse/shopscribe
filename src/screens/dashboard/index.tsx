/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {Image, ScrollView, TouchableOpacity, View} from 'react-native';
import {Divider, FlexedView, Spacer, ViewContainer} from '@components/view';
import {Paragraph} from '@components/text/text';
import Category from './components/Category';
import useAppColor from '@hooks/useAppColor';
import ShopperSlider from './components/ShopperSlider';
import Entypo from 'react-native-vector-icons/Entypo';
import NotiIcon from '@assets/svgs/notification.svg';
import {useNavigation} from '@react-navigation/native';
import {nav} from '../../types';
import {HomeScreenParam} from '@navigation/dashboard/screens';
import sharedImages from '@utility/sharedImages';

const HomeScreen: React.FC = ({}) => {
  const {navigate} = useNavigation<nav<HomeScreenParam>>();
  const colors = useAppColor();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.white,
      }}>
      <View style={{flex: 1}}>
        <Spacer height={30} />
        <ViewContainer>
          <FlexedView justifyContent="space-between">
            <TouchableOpacity onPress={() => navigate('Location')}>
              <FlexedView>
                <Image source={sharedImages.icons.location} />
                <Paragraph
                  fontSize={14}
                  style={{marginLeft: 5}}
                  lineHeight={21}
                  color={colors['black-shade']}
                  fontWeight="400">
                  11, wole owopetu Dr, Mende...
                </Paragraph>
                <Entypo name="chevron-down" size={20} />
              </FlexedView>
            </TouchableOpacity>
            <NotiIcon />
          </FlexedView>
        </ViewContainer>

        <ScrollView showsVerticalScrollIndicator={false}>
          <ViewContainer>
            <Spacer height={40} />
            <Category />
          </ViewContainer>
          <Divider height={10} />
          <ShopperSlider label="Shoppers around you" />
          <Divider height={10} />
          <ShopperSlider label="Favourites" />
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeScreen;
