import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthScreenList} from './authParamList';
import SignUp from '@screens/auth/signup';
import VerifyPhonenumber from '@screens/auth/signup/VerifyNumber';
import SignIn from '@screens/auth/signin';
import ForgotPassword from '@screens/auth/forgotPassword';
import CreatePassword from '@screens/auth/signup/CreatePassword';
import StartPage from '@screens/auth/startPage';
import ResetPassword from '@screens/auth/forgotPassword/ResetPassword';

const {Screen, Navigator} = createStackNavigator<AuthScreenList>();

const AuthNavigator = () => {
  return (
    <Navigator
      initialRouteName={'StartPage'}
      screenOptions={{headerShown: false}}>
      <Screen name="StartPage" component={StartPage} />
      <Screen name="SignUp" component={SignUp} />
      <Screen name="VerifyPhonenumber" component={VerifyPhonenumber} />
      <Screen name="SignIn" component={SignIn} />
      <Screen name="ResetPassord" component={ResetPassword} />
      <Screen name="ForgotPassword" component={ForgotPassword} />
      <Screen name="CreatePassword" component={CreatePassword} />
    </Navigator>
  );
};

export default AuthNavigator;
