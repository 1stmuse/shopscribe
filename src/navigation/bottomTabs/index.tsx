/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {BottomScreenParams} from '@navigation/dashboard/screens';
import HomeScreen from '@screens/dashboard';
import Profile from '@screens/dashboard/profile';
import Orders from '@screens/dashboard/orders';
import Search from '@screens/dashboard/Search';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import useAppColor from '@hooks/useAppColor';
import {Image, StyleSheet} from 'react-native';
import sharedImages from '@utility/sharedImages';
import {widthPixel} from '@utility/pxToDpConvert';

const {Screen, Navigator} = createBottomTabNavigator<BottomScreenParams>();
type ScreenOptions = {
  route: RouteProp<BottomScreenParams>;
  navigation: NavigationProp<BottomScreenParams>;
};

const Tabs = () => {
  const colors = useAppColor();

  const navOption = ({route}: ScreenOptions): BottomTabNavigationOptions => {
    return {
      tabBarActiveTintColor: colors.primary,
      tabBarInactiveTintColor: colors.black,
      headerShown: false,
      tabBarIcon: ({focused}) => {
        switch (route.name) {
          case 'Dashboard':
            return (
              <Image
                source={sharedImages.home}
                tintColor={focused ? colors.primary : colors['black-shade']}
                style={styles.icons}
              />
            );
          case 'Profile':
            return (
              <Image
                source={sharedImages.profile}
                tintColor={focused ? colors.primary : colors['black-shade']}
                style={styles.icons}
              />
            );
          case 'Orders':
            return (
              <Image
                source={sharedImages.orders}
                tintColor={focused ? colors.primary : colors['black-shade']}
                style={styles.icons}
              />
            );
          case 'Search':
            return (
              <Image
                source={sharedImages.search}
                tintColor={focused ? colors.primary : colors['black-shade']}
                style={styles.icons}
              />
            );
        }
      },
      tabBarStyle: {
        height: 100,
      },
    };
  };

  return (
    <Navigator screenOptions={navOption}>
      <Screen name="Dashboard" component={HomeScreen} />
      <Screen name="Search" component={Search} />
      <Screen name="Orders" component={Orders} />
      <Screen name="Profile" component={Profile} />
    </Navigator>
  );
};

const styles = StyleSheet.create({
  icons: {
    width: widthPixel(30),
    height: widthPixel(30),
  },
});

export default Tabs;
