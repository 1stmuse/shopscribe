import React, {useState} from 'react';
import {AuthScreenList} from '../../../navigation/auth/authParamList';
import {ScrollView, StyleSheet, View} from 'react-native';
import {BaseView, Spacer, ViewContainer} from '@components/view';
import {heightPixel} from '@utility/pxToDpConvert';
import {Paragraph} from '@components/text/text';
import {AppTextInput} from '@components/TextInput';
import {AppButton} from '@components/button';
import {useNavigation} from '@react-navigation/native';
import {nav} from 'src/types/index';
import useAppColor from '@hooks/useAppColor';
import Header from '@components/header';
import {
  checkSpecialChar,
  hasNumber,
  isLowerCase,
  isUpperCase,
} from '@utility/helpers';
import {useModal} from '@hooks/useModal';

interface PassCondition {
  title: string;
  condition: boolean;
}

const ResetPassword: React.FC = () => {
  const appColor = useAppColor();
  const [password, setPassword] = useState({
    newPassword: '',
  });
  const {navigate, goBack} = useNavigation<nav<AuthScreenList>>();
  const {show, close} = useModal();

  const conditions: PassCondition[] = [
    {
      title: '8 characters',
      condition: password.newPassword.length > 7,
    },
    {
      title: '1 Number',
      condition: hasNumber(password.newPassword),
    },
    {
      title: '1 symbol',
      condition: checkSpecialChar(password.newPassword),
    },
    {
      title: 'Uppercase',
      condition: isUpperCase(password.newPassword),
    },
    {
      title: 'Lowercase',
      condition: isLowerCase(password.newPassword),
    },
  ];

  const onChange = (key: string, value: string) => {
    setPassword(prev => ({
      ...prev,
      [key]: value,
    }));
  };

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
              Reset Password
            </Paragraph>
            <Paragraph mt={5}>
              Create a new password that you will use to access your account
            </Paragraph>

            <Spacer height={40} />
            <AppTextInput
              value={password.newPassword}
              placeholder="Enter Password"
              onChangeText={text => onChange('newPassword', text)}
              secureTextEntry
            />

            <View style={styles.condView}>
              {conditions.map((cd, ind) => (
                <View
                  style={[
                    styles.condition,
                    {
                      backgroundColor: cd.condition
                        ? appColor.primary
                        : appColor.border,
                    },
                  ]}
                  key={ind}>
                  <Paragraph
                    color={cd.condition ? appColor.white : appColor.black}>
                    {cd.title}
                  </Paragraph>
                </View>
              ))}
            </View>

            <Spacer height={50} />
            <AppButton text="Proceed" onPress={signIn} variant="primary" />
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
  condView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  condition: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingVertical: 5,
    marginBottom: 5,
    marginRight: 10,
    borderRadius: 4,
  },
});

export default ResetPassword;
