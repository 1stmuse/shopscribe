import {ScrollView, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import colors from '@utility/colors';
import {widthPixel} from '@utility/pxToDpConvert';
import Header from '@components/header';
import {PassCondition} from '@screens/auth/signup/CreatePassword';
import {
  checkSpecialChar,
  hasNumber,
  isLowerCase,
  isUpperCase,
} from '@utility/helpers';
import {Paragraph} from '@components/text/text';
import {AppTextInput} from '@components/TextInput';
import {Spacer} from '@components/view';
import {AppButton} from '@components/button';

const ChangePassword = () => {
  const [password, setPassword] = useState({
    oldPassword: '',
    newPassword: '',
  });
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
  return (
    <View style={styles.main}>
      <Header title="Password" />
      <View style={{flex: 1}}>
        <ScrollView>
          <Spacer height={35} />
          <AppTextInput
            placeholder="Enter Current Password"
            value={password.oldPassword}
            onChangeText={text => setPassword({...password, oldPassword: text})}
          />
          <AppTextInput
            placeholder="Enter New Password"
            value={password.newPassword}
            onChangeText={text => setPassword({...password, newPassword: text})}
          />
          <View style={styles.condView}>
            {conditions.map((cd, ind) => (
              <View
                style={[
                  styles.condition,
                  {
                    backgroundColor: cd.condition
                      ? colors.primary
                      : colors.border,
                  },
                ]}
                key={ind}>
                <Paragraph color={cd.condition ? colors.white : colors.black}>
                  {cd.title}
                </Paragraph>
              </View>
            ))}
          </View>
          <Spacer height={40} />
          <AppButton
            variant="primary"
            text="Chnage Password"
            disabled={!password.newPassword}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingHorizontal: widthPixel(20),
    backgroundColor: colors.white,
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
