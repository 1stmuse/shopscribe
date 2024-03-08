import React from 'react';
import {AuthScreenList} from '../../../navigation/auth/authParamList';
import {ScrollView, StyleSheet, View, Image} from 'react-native';
import {BaseView, FlexedView, Spacer, ViewContainer} from '@components/view';
import {heightPixel} from '@utility/pxToDpConvert';
import {Paragraph} from '@components/text/text';
import {AppTextInput} from '@components/TextInput';
import {AppButton} from '@components/button';
import {useNavigation} from '@react-navigation/native';
import {nav} from 'src/types/index';
import useAppColor from '@hooks/useAppColor';
import Header from '@components/header';
import sharedImages from '@utility/sharedImages';

const SignUp: React.FC = () => {
  const appColor = useAppColor();
  const {navigate, goBack} = useNavigation<nav<AuthScreenList>>();

  return (
    <BaseView>
      <ViewContainer style={{flex: 1}}>
        <Header isAuth={true} backAction={goBack} />
        <ScrollView style={{flex: 1}}>
          <Spacer height={25} />
          <View>
            <Paragraph fontWeight="bold" fontSize={18} color={appColor.black}>
              Hello, Let’s set up your account!
            </Paragraph>

            <Spacer height={40} />
            <AppTextInput placeholder="First Name" />
            <AppTextInput placeholder="Enter Last Name" />
            <AppTextInput placeholder="Enter Phone Number" />
            <AppTextInput placeholder="Enter Email Address" />

            <Spacer height={50} />
            <AppButton
              text="Proceed"
              onPress={() => navigate('CreatePassword', {data: {}})}
              variant="primary"
            />
            <Spacer height={50} />
            <Paragraph fontSize={20} textAlign="center">
              Or
            </Paragraph>
            <Spacer height={50} />
            <View style={styles.bottom}>
              <Paragraph fontSize={17}>Sign up Using</Paragraph>
              <Spacer height={25} />
              <FlexedView>
                <Image
                  style={styles.img}
                  resizeMode="contain"
                  source={sharedImages.google}
                />
                <Image
                  style={styles.img}
                  resizeMode="contain"
                  source={sharedImages.apple}
                />
                <Image
                  style={styles.img}
                  resizeMode="contain"
                  source={sharedImages.facebook}
                />
              </FlexedView>
            </View>
          </View>
        </ScrollView>
      </ViewContainer>
    </BaseView>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: heightPixel(70),
    height: heightPixel(70),
    alignSelf: 'center',
  },
  bottom: {
    alignItems: 'center',
  },
  img: {
    width: heightPixel(40),
    height: heightPixel(40),
    marginHorizontal: 10,
  },
});

export default SignUp;
