import {Image, StyleSheet} from 'react-native';
import React from 'react';
import {FlexedView, Spacer, ViewContainer} from '@components/view';
import {Paragraph} from '@components/text/text';
import colors from '@utility/colors';
import {widthPixel} from '@utility/pxToDpConvert';

interface IProps {
  item: any;
}

const ReviewCard = ({item}: IProps) => {
  return (
    <ViewContainer style={styles.card}>
      <FlexedView>
        <Image source={item.profileImg} style={styles.pp} />
        <Paragraph fontSize={16}>{item.name}</Paragraph>
      </FlexedView>
      <Spacer />
      <Paragraph fontWeight="300">{item.comment}</Paragraph>
    </ViewContainer>
  );
};

export default ReviewCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.border,
    paddingVertical: 10,
    marginBottom: 20,
  },
  pp: {
    width: widthPixel(50),
    height: widthPixel(50),
    borderRadius: 100 / 2,
    marginRight: 10,
  },
});
