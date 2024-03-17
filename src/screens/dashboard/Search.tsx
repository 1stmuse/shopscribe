/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Divider, Spacer, ViewContainer} from '@components/view';
import {Paragraph} from '@components/text/text';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import useAppColor from '@hooks/useAppColor';
import {AppTextInput} from '@components/TextInput';
import ShopperCard from './components/ShopperCard';

const Search: React.FC = () => {
  const appColor = useAppColor();
  return (
    <View style={styles.container}>
      <Paragraph
        fontWeight="700"
        fontSize={30}
        lineHeight={32}
        style={{marginHorizontal: 20, marginBottom: 10}}>
        Search
      </Paragraph>
      <Divider height={4} />
      <ViewContainer style={{flex: 1}}>
        <Spacer height={25} />
        <ScrollView>
          <AppTextInput
            value=""
            placeholder="Shoppers name, categories, rating etc"
            containerStyle={{
              backgroundColor: appColor.border,
              borderRadius: 8,
            }}
            leftIcon={<EvilIcons name="search" size={25} />}
          />
          <Spacer />
          {shoppers.map((item, ind) => (
            <ShopperCard item={item} type="flex" key={ind} />
          ))}
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
});

export default Search;
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
