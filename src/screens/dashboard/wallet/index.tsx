import {ImageBackground, ScrollView, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '@components/header';
import {widthPixel} from '@utility/pxToDpConvert';
import {FlexedView, Spacer, ViewContainer} from '@components/view';
import {Paragraph} from '@components/text/text';
import {AppButton} from '@components/button';
import colors from '@utility/colors';
import BottomSheet from '@components/bottomSheet';
import Radio from '@components/radio';
import sharedImages from '@utility/sharedImages';
import data from '../../../data';

type FundType = 'card' | 'bank';

const Wallet = () => {
  const [showSheet, setShowSheet] = useState(false);
  const closeSheet = () => setShowSheet(false);
  const [fundType, setFundType] = useState<FundType>('bank');

  const transaction = data.transaction;

  //   const structureData = () => {
  //     let listData = [];
  //     let listObject = {};

  //     for (const key of transaction) {
  //       let month = dayjs(key.date).format('MMMM');
  //       console.log(month, 'THE MONTH');
  //       if (listObject[month]) {
  //         listObject[month].push(key);
  //       } else {
  //         listObject[month] = [key];
  //       }
  //     }

  //     console.log(listObject);
  //   };

  useEffect(() => {
    // structureData();
  });

  return (
    <View style={styles.container}>
      <Header title="Wallet" />
      <Spacer height={35} />
      <View>
        <ScrollView>
          <ImageBackground source={sharedImages.walletBg} style={styles.balV}>
            <FlexedView justifyContent="space-between">
              <View>
                <Paragraph fontWeight="500" color={colors.white}>
                  Wallet Balance
                </Paragraph>
                <Paragraph
                  mt={10}
                  fontSize={19}
                  fontWeight="700"
                  color={colors.white}>
                  #50,000
                </Paragraph>
              </View>
              <AppButton
                variant="outline"
                text="Add Money"
                style={styles.btn}
                textStyle={{color: colors.blue}}
                onPress={() => setShowSheet(true)}
              />
            </FlexedView>
          </ImageBackground>
        </ScrollView>
      </View>
      <BottomSheet visible={showSheet} close={closeSheet}>
        <ViewContainer style={styles.modalV}>
          <Paragraph>Select funding option</Paragraph>
          <Spacer />
          <FlexedView style={styles.optionV}>
            <Radio
              selected={fundType === 'card'}
              color={colors.primary}
              onPress={() => {
                setFundType('card');
              }}
            />
            <Paragraph style={{marginLeft: 10}}>Credit/Debit Card</Paragraph>
          </FlexedView>
          <Spacer />
          <FlexedView style={styles.optionV}>
            <Radio
              selected={fundType === 'bank'}
              color={colors.primary}
              onPress={() => {
                setFundType('bank');
              }}
            />
            <Paragraph style={{marginLeft: 10}}>Bank Transfer</Paragraph>
          </FlexedView>
          <Spacer />
          <AppButton variant="primary" text="Proceed" />
          <Spacer height={50} />
        </ViewContainer>
      </BottomSheet>
    </View>
  );
};

export default Wallet;

const styles = StyleSheet.create({
  optionV: {
    borderRadius: 20,
    backgroundColor: colors.border,
    padding: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: widthPixel(20),
  },
  btn: {
    backgroundColor: colors.white,
    borderRadius: 20,
    paddingHorizontal: 20,
    height: 30,
    borderColor: colors.blue,
  },
  balV: {
    paddingVertical: 20,
    borderRadius: 10,
    paddingHorizontal: 20,
    overflow: 'hidden',
  },
  modalV: {
    backgroundColor: colors.white,
    paddingTop: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
});
