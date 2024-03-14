import React from 'react';
import {AuthScreenList} from '../../../navigation/auth/authParamList';
import {Pressable, ScrollView, StyleSheet, View, Image} from 'react-native';
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
import {useModal} from '@hooks/useModal';

const SignIn: React.FC = () => {
  const appColor = useAppColor();
  const {navigate, goBack} = useNavigation<nav<AuthScreenList>>();

  const {show, close} = useModal();

  const signIn = () => {
    show({
      title: 'Password Reset Success',
      description:
        'Your password reset was successful, please proceed to login',
      type: 'error',
      action: () => close(),
      btnLabel: 'Procced to login',
    });
  };

  return (
    <BaseView>
      <ViewContainer style={{flex: 1}}>
        <Header isAuth={true} backAction={goBack} />
        <ScrollView style={{flex: 1}}>
          <Spacer height={25} />
          <View>
            <Paragraph fontWeight="bold" fontSize={18} color={appColor.black}>
              Welcome Back
            </Paragraph>
            <Paragraph mt={5}>
              Log in to pick up from where you left off
            </Paragraph>
            <Spacer height={50} />
            <AppTextInput placeholder="Enter phone number" />
            <AppTextInput placeholder="Enter Password" />
            <FlexedView justifyContent="flex-end">
              <Pressable onPress={() => navigate('ForgotPassword')}>
                <Paragraph>Forgot password?</Paragraph>
              </Pressable>
            </FlexedView>
            <Spacer height={50} />
            <AppButton text="Login" variant="primary" onPress={signIn} />
            <Spacer height={50} />
            <Paragraph fontSize={20} textAlign="center">
              Or
            </Paragraph>
            <Spacer height={50} />
            <View style={styles.bottom}>
              <Paragraph fontSize={17}>Log in Using</Paragraph>
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

export default SignIn;
