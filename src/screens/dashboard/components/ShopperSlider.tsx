import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import {FlexedView, Spacer, ViewContainer} from '@components/view';
import {Paragraph} from '@components/text/text';
import useAppColor from '@hooks/useAppColor';
import sharedImages from '@utility/sharedImages';
import {widthPixel} from '@utility/pxToDpConvert';

interface IProps {
  label: string;
}

const ShopperSlider = ({label}: IProps) => {
  const colors = useAppColor();
  const {width} = useWindowDimensions();
  return (
    <View style={styles.container}>
      <ViewContainer>
        <FlexedView justifyContent="space-between">
          <Paragraph>{label}</Paragraph>
          <TouchableOpacity>
            <Paragraph color={colors.primary}>See more</Paragraph>
          </TouchableOpacity>
        </FlexedView>
      </ViewContainer>
      <Spacer height={25} />
      <ScrollView
        contentContainerStyle={{paddingLeft: 20}}
        horizontal
        showsHorizontalScrollIndicator={false}>
        {shoppers.map((item, ind) => (
          <ViewContainer
            style={[
              styles.card,
              {
                width: width * 0.4,
              },
            ]}
            key={ind}>
            <Image source={sharedImages.pp} style={styles.img} />
            <FlexedView>
              <Paragraph>{item.name}</Paragraph>
            </FlexedView>
            <Paragraph
              style={{marginVertical: 5}}
              color={colors['black-shade']}>
              {item.location}
            </Paragraph>
            <Paragraph color={colors['black-shade']}>{item.category}</Paragraph>
          </ViewContainer>
        ))}
      </ScrollView>
    </View>
  );
};

export default ShopperSlider;

const styles = StyleSheet.create({
  img: {
    width: widthPixel(80),
    height: widthPixel(80),
    borderRadius: 80 / 2,
    marginBottom: 10,
  },
  container: {
    paddingVertical: 20,
  },
  card: {
    borderWidth: 0.5,
    borderColor: '#CFCECE',
    marginHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 8,
  },
});

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
