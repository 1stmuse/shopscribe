/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {FlexedView, Spacer, ViewContainer} from '@components/view';
import {Paragraph} from '@components/text/text';
import ShopperCard from './components/ShopperCard';
import Header from '@components/header';
import {RouteProp, useRoute} from '@react-navigation/native';
import {HomeScreenParam} from '@navigation/dashboard/screens';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '@utility/colors';
import {heightPixel} from '@utility/pxToDpConvert';

type routeProp = RouteProp<HomeScreenParam, 'ShoppersList'>;

const ShopperList: React.FC = () => {
  const {params} = useRoute<routeProp>();

  return (
    <ViewContainer style={styles.container}>
      <Header title={params.category} />
      <View style={{flex: 1}}>
        <Spacer height={25} />
        <ScrollView>
          <FlexedView style={styles.info}>
            <AntDesign name="infocirlceo" size={24} />
            <Paragraph style={{marginLeft: 10, flex: 1}} fontSize={16}>
              This list shows only shoppers who deal in this category
            </Paragraph>
          </FlexedView>
          <Spacer />
          {shoppers.map((item, ind) => (
            <ShopperCard item={item} type="flex" key={ind} />
          ))}
        </ScrollView>
      </View>
    </ViewContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  info: {
    backgroundColor: colors.border,
    padding: heightPixel(20),
    borderRadius: 15,
  },
});

export default ShopperList;
const shoppers = [
  {
    name: 'Ayo Benson',
    location: 'Yaba, Lagos',
    category: 'Clothing, Accessories',
    rating: 4.6,
  },
  {
    name: 'Ayo Benson',
    location: 'Yaba, Lagos',
    category: 'Clothing, Accessories',
    rating: 4.6,
  },
  {
    name: 'Ayo Benson',
    location: 'Yaba, Lagos',
    category: 'Clothing, Accessories',
    rating: 4.6,
  },
  {
    name: 'Ayo Benson',
    location: 'Yaba, Lagos',
    category: 'Clothing, Accessories',
    rating: 4.6,
  },
  {
    name: 'Ayo Benson',
    location: 'Yaba, Lagos',
    category: 'Clothing, Accessories',
    rating: 4.6,
  },
];
