/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {AuthScreenList} from '../../../navigation/auth/authParamList';
import {BaseView, FlexedView, Spacer, ViewContainer} from '@components/view';
import {AppButton} from '@components/button';
import {Paragraph} from '@components/text/text';
import Header from '@components/header';
import {useNavigation} from '@react-navigation/native';
import {nav} from '../../../types/index';
import useAppColor from '@hooks/useAppColor';
import {
  useBlurOnFulfill,
  useClearByFocusCell,
  CodeField,
  Cursor,
} from 'react-native-confirmation-code-field';
import {heightPixel} from '@utility/pxToDpConvert';

type navProps = StackNavigationProp<AuthScreenList>;
const CELL_COUNT = 6;

const ForgotPassword: React.FC = () => {
  const appColor = useAppColor();
  const [otp, setOtp] = useState('');
  const [seconds, setSeconds] = useState<number>(30);
  const {navigate, goBack} = useNavigation<nav<AuthScreenList>>();
  const ref = useBlurOnFulfill({value: otp, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value: otp,
    setValue: setOtp,
  });

  const startTimer = () => {
    const timer = setTimeout(() => {
      if (seconds <= 0) {
        clearTimeout(timer);
      } else {
        setSeconds(seconds - 1);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
  }, [seconds]);

  const resend = async () => {
    setSeconds(30);

    startTimer();
  };

  return (
    <BaseView>
      <ViewContainer style={{flex: 1}}>
        <Header isAuth={true} backAction={goBack} />
        <ScrollView style={{flex: 1}}>
          <Spacer height={25} />
          <View>
            <Paragraph fontWeight="bold" fontSize={18} color={appColor.black}>
              Forgot password
            </Paragraph>
            <Paragraph mt={5}>
              Enter the 6 digit pin sent to 08100267251
            </Paragraph>
            <Spacer height={40} />
            <CodeField
              ref={ref}
              {...props}
              value={otp}
              onChangeText={setOtp}
              cellCount={CELL_COUNT}
              rootStyle={styles.otpView}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              showSoftInputOnFocus={true}
              renderCell={({index, symbol, isFocused}) => {
                let textChild = null;
                if (symbol) {
                  textChild = symbol;
                } else if (isFocused) {
                  textChild = null;
                }
                return (
                  <View
                    onLayout={getCellOnLayoutHandler(index)}
                    key={index}
                    style={[
                      {
                        ...styles.otpBox,

                        borderColor: appColor.border,
                      },
                      isFocused && styles.otpFocus,
                    ]}>
                    <Paragraph fontSize={24} lineHeight={26}>
                      {textChild || (isFocused ? <Cursor /> : null)}
                    </Paragraph>
                  </View>
                );
              }}
            />
            {seconds > 0 ? (
              <FlexedView style={{marginTop: 10}}>
                <Paragraph fontSize={14}>Didn't get code?</Paragraph>
                <Paragraph color={appColor.primary}>
                  {`Resend in 0${Math.floor(seconds / 60)} : ${
                    seconds < 10 ? 0 : ''
                  }${seconds % 60}`}
                </Paragraph>
              </FlexedView>
            ) : (
              <FlexedView style={{marginTop: 10}}>
                <Paragraph fontSize={14}>Didn't get code?</Paragraph>
                <TouchableOpacity onPress={resend}>
                  <Paragraph color={appColor.primary}>Resend</Paragraph>
                </TouchableOpacity>
              </FlexedView>
            )}

            <Spacer height={50} />
            <AppButton
              text="Proceed"
              onPress={() => navigate('ResetPassord')}
              variant="primary"
            />
          </View>
        </ScrollView>
      </ViewContainer>
    </BaseView>
  );
};

const styles = StyleSheet.create({
  otpView: {
    marginBottom: 5,
    width: '100%',
  },
  otpBox: {
    width: heightPixel(50),
    height: heightPixel(50),
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    borderColor: '#D0D5DD',
    justifyContent: 'center',
  },
  otpFocus: {
    borderColor: '#DE183D',
    borderWidth: 1,
    borderRadius: 10,
  },
});

export default ForgotPassword;
