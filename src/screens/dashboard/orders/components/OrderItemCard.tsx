import {AppButton} from '@components/button';
import {Paragraph} from '@components/text/text';
import {FlexedView, Spacer, ViewContainer} from '@components/view';
import colors from '@utility/colors';
import sharedImages from '@utility/sharedImages';
import dayjs from 'dayjs';
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface IProps {
  item?: any;
  type?: string;
}

export const OrderItemCard = ({type}: IProps) => {
  const isRequest = type !== 'ongoing';
  return (
    <ViewContainer style={styles.card}>
      <FlexedView style={styles.flex} justifyContent="space-between">
        <FlexedView style={styles.flex}>
          <Image
            source={
              isRequest
                ? sharedImages.icons.request
                : sharedImages.icons.ongoing
            }
            style={{marginRight: 10, width: 40, height: 40}}
          />
          <View>
            <Paragraph fontSize={16}>
              {`${isRequest ? 'Request to' : 'Prices received from'}`}{' '}
            </Paragraph>
            <Paragraph
              mt={5}
              fontSize={20}
              fontWeight="500"
              color={colors.black}>
              Ayo Benson
            </Paragraph>
            <Paragraph mt={8} fontSize={16}>
              {dayjs().format('DD MMM YYYY')}
            </Paragraph>
          </View>
        </FlexedView>
        <Paragraph fontWeight="500" fontSize={20} color={colors.black}>
          5 Items
        </Paragraph>
      </FlexedView>
      <Spacer />
      {isRequest ? (
        <FlexedView style={[styles.flex, styles.updateBox]}>
          <AntDesign name="info" size={24} style={{marginRight: 20}} />
          <View style={{flex: 1}}>
            <Paragraph fontSize={18} color={colors.black}>
              Awaiting Price...
            </Paragraph>
            <Paragraph mt={6} fontSize={15}>
              Shopper will respond with price of items shortly
            </Paragraph>
          </View>
        </FlexedView>
      ) : (
        <FlexedView style={styles.flex}>
          <AntDesign name="info" size={24} style={{marginRight: 20}} />

          <Paragraph fontSize={18} color={colors.black}>
            Prices have been added
          </Paragraph>
        </FlexedView>
      )}
      <Spacer />
      <AppButton
        variant="primary"
        text={isRequest ? 'View Request' : 'Proceed'}
      />
    </ViewContainer>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
    borderWidth: 2,
    paddingVertical: 25,
    borderColor: colors.border,
    borderRadius: 15,
  },
  flex: {
    alignItems: 'flex-start',
  },
  updateBox: {
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.gray100,
    padding: 15,
    flex: 1,
    borderRadius: 15,
  },
});
