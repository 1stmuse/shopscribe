/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {Platform, ScrollView, View} from 'react-native';
import {Divider, Spacer, ViewContainer} from '@components/view';
import {Paragraph} from '@components/text/text';
import Category from './components/Category';
import useAppColor from '@hooks/useAppColor';
import ShopperSlider from './components/ShopperSlider';

const HomeScreen: React.FC = ({}) => {
  const colors = useAppColor();
  return (
    <View
      style={{
        paddingTop: Platform.OS === 'ios' ? 50 : 10,
        flex: 1,
        backgroundColor: colors.white,
      }}>
      <View style={{flex: 1}}>
        <Spacer height={30} />
        <Paragraph fontSize={17} lineHeight={21} fontWeight="400">
          Dashboard
        </Paragraph>

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
