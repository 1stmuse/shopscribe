import React from 'react';
import {AuthScreenList} from '@navigation/auth/authParamList';
import {BaseView, Spacer, ViewContainer} from '@components/view';
import {Paragraph} from '@components/text/text';
import {AppButton} from '@components/button';
import colors from '@utility/colors';
import {useNavigation} from '@react-navigation/native';
import {nav} from 'src/types/index';
import useAppColor from '@hooks/useAppColor';
import sharedImages from '@utility/sharedImages';
import {Image, StyleSheet, View, useWindowDimensions} from 'react-native';
import {heightPixel} from '@utility/pxToDpConvert';

const StartPage: React.FC = () => {
  const appColor = useAppColor();
  const {width} = useWindowDimensions();
  const {navigate} = useNavigation<nav<AuthScreenList>>();

  const images = [
    sharedImages.cloth1,
    sharedImages.store1,
    sharedImages.shoe1,
    sharedImages.mkt1,
  ];

  return (
    <BaseView>
      <ViewContainer style={{flex: 1}}>
        <View style={{flex: 1}}>
          <View style={styles.imgView}>
            {images.map((img, ind) => (
              <Image
                source={img}
                key={ind}
                style={[
                  styles.img,
                  {
                    width: (width - 50) / 2,
                  },
                ]}
              />
            ))}
          </View>
          <View>
            <Paragraph fontWeight="700" fontSize={25}>
              Personal Shopping Made Easy for you.
            </Paragraph>
            <Paragraph mt={10}>
              Get professionals to go get the best things from the market for
              you without stress
            </Paragraph>
          </View>
          <Spacer height={20} />
        </View>
        <View>
          <AppButton
            variant="primary"
            text="Crete Account"
            onPress={() => navigate('SignUp')}
          />
          <Spacer />
          <AppButton
            variant="secondary"
            text="Login"
            onPress={() => navigate('SignIn')}
          />
          <Spacer />
        </View>
      </ViewContainer>
    </BaseView>
  );
};

const styles = StyleSheet.create({
  imgView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  img: {
    height: heightPixel(200),
    marginBottom: 10,
    borderRadius: 10,
  },
});

export default StartPage;
