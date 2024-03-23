import {
  View,
  StyleSheet,
  FlatList,
  Pressable,
  Image,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import sharedImages from '@utility/sharedImages';
import {Paragraph} from '@components/text/text';
import {useNavigation} from '@react-navigation/native';
import {nav} from '../../../types';
import {HomeScreenParam} from '@navigation/dashboard/screens';

const Category = () => {
  const {width} = useWindowDimensions();
  const {navigate} = useNavigation<nav<HomeScreenParam>>();
  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        scrollEnabled={false}
        renderItem={({item}) => (
          <Pressable
            onPress={() => navigate('ShoppersList', {category: item.label})}
            style={[
              styles.card,
              {
                width: width * 0.45,
                backgroundColor: item.bg,
              },
            ]}>
            <Image source={item.img} />
            <Paragraph fontSize={17}>{item.label}</Paragraph>
          </Pressable>
        )}
        numColumns={2}
        keyExtractor={(_, ind) => ind.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingBottom: 10,
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    paddingVertical: 20,
    marginBottom: 10,
    borderRadius: 10,
  },
});

const categories = [
  {
    label: 'Accessories',
    img: sharedImages.assesory,
    bg: 'rgba(255, 243, 246, 0.5)',
  },
  {
    label: 'Groceries',
    img: sharedImages.cart,
    bg: 'rgba(254, 254, 235, 0.5)',
  },
  {
    label: 'Utensils',
    img: sharedImages.utensil,
    bg: 'rgba(241, 246, 255, 0.5)',
  },
  {
    label: 'Gadgets',
    img: sharedImages.gadget,
    bg: 'rgba(247, 239, 251, 0.5)',
  },
];

export default Category;
