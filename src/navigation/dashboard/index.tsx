/* eslint-disable @typescript-eslint/no-unused-vars */

import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {HomeScreenParam} from './screens';
import {NavigationProp, RouteProp} from '@react-navigation/core';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '@screens/dashboard/index';
import Tabs from '@navigation/bottomTabs';
import {BaseView} from '@components/view';
import Location from '@screens/dashboard/Location';
import ShopperProfile from '@screens/dashboard/ShopperProfile';
import CreateRequest from '@screens/dashboard/orders/createRequest';
import RequestSummary from '@screens/dashboard/orders/RequestSummary';
import ShopperList from '@screens/dashboard/ShopperList';
import EditProfile from '@screens/dashboard/profile/EditProfile';
import VerifyInfo from '@screens/dashboard/profile/VerifyInfo';
import Wallet from '@screens/dashboard/wallet';
import Security from '@screens/dashboard/security';
import ChangePassword from '@screens/dashboard/security/ChangePassword';
import ChangePin from '@screens/dashboard/security/ChangePin';

const {Screen: StackScreen, Navigator: StackNav} =
  createStackNavigator<HomeScreenParam>();

const DashboardNavigator = () => {
  return (
    <BaseView>
      <StackNav
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Tab">
        <StackScreen component={Tabs} name="Tab" />
        <StackScreen name="Location" component={Location} />
        <StackScreen name="ShopperProfile" component={ShopperProfile} />
        <StackScreen name="CreateRequest" component={CreateRequest} />
        <StackScreen name="RequestSummary" component={RequestSummary} />
        <StackScreen name="ShoppersList" component={ShopperList} />
        <StackScreen name="EditProfile" component={EditProfile} />
        <StackScreen name="VerifyInfo" component={VerifyInfo} />
        <StackScreen name="Wallet" component={Wallet} />
        <StackScreen name="Security" component={Security} />
        <StackScreen name="ChangePassword" component={ChangePassword} />
        <StackScreen name="ChangePin" component={ChangePin} />
      </StackNav>
    </BaseView>
  );
};

export default DashboardNavigator;
