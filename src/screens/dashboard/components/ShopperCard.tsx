/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import sharedImages from '@utility/sharedImages';
import {Paragraph} from '@components/text/text';
import {FlexedView, Spacer} from '@components/view';
import colors from '@utility/colors';
import {widthPixel} from '@utility/pxToDpConvert';
import {useNavigation} from '@react-navigation/native';
import {nav} from '../../../types';
import {HomeScreenParam} from '@navigation/dashboard/screens';
import Entypo from 'react-native-vector-icons/Entypo';

interface IProps {
  type: 'block' | 'flex';
  item: any;
}

const ShopperCard = ({type, item}: IProps) => {
  const {navigate} = useNavigation<nav<HomeScreenParam>>();
  const {width} = useWindowDimensions();

  return (
    <TouchableOpacity
      onPress={() => navigate('ShopperProfile')}
      style={[
        styles.card,
        {
          width: type === 'block' ? width * 0.45 : '100%',
          marginHorizontal: type === 'block' ? 10 : 0,
          borderWidth: type === 'block' ? 0.5 : 0,
          borderBottomWidth: type === 'block' ? 0.5 : 1,
          marginBottom: type === 'block' ? 0 : 15,
          paddingLeft: type === 'block' ? 10 : 0,
          flexDirection: type === 'block' ? 'column' : 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        },
      ]}>
      <FlexedView
        style={{
          flexDirection: type === 'block' ? 'column' : 'row',
          alignItems: 'flex-start',
        }}>
        <Image
          source={sharedImages.pp}
          style={[
            styles.img,
            {
              marginRight: type === 'block' ? 0 : 10,
            },
          ]}
        />
        <View>
          <FlexedView>
            <Paragraph>{item.name}</Paragraph>
          </FlexedView>
          <Paragraph style={{marginVertical: 5}} color={colors['black-shade']}>
            {item.location}
          </Paragraph>
          <Paragraph color={colors['black-shade']}>{item.category}</Paragraph>
        </View>
      </FlexedView>
      <Spacer height={5} />
      <FlexedView>
        <Entypo
          name="star"
          style={{marginLeft: 5}}
          color={colors.yellow}
          size={20}
        />
        <Paragraph>{item.rating}</Paragraph>
      </FlexedView>
    </TouchableOpacity>
  );
};

export default ShopperCard;

const styles = StyleSheet.create({
  card: {
    borderColor: '#CFCECE',
    paddingVertical: 10,
    borderRadius: 8,
  },
  img: {
    width: widthPixel(80),
    height: widthPixel(80),
    borderRadius: 80 / 2,
    marginBottom: 10,
  },
});
