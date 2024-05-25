/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Image,
  ImageSourcePropType,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {heightPixel, widthPixel} from '@utility/pxToDpConvert';
import {FlexedView, Spacer, ViewContainer} from '@components/view';
import {Paragraph} from '@components/text/text';
import {getInitials} from '@utility/helpers';
import colors from '@utility/colors';
import {HomeScreenParam} from '@navigation/dashboard/screens';
import sharedImages from '@utility/sharedImages';
import AppSwitch from '@components/switch';
import {nav} from '../../../types';
import {useNavigation} from '@react-navigation/native';

const person = {
  name: 'John Krasniki',
  image: '',
};

const Profile: React.FC = ({}) => {
  const [enableBiometrics, setBioMetric] = useState(false);
  const {navigate} = useNavigation<nav<HomeScreenParam>>();

  return (
    <View style={{flex: 1}}>
      <ViewContainer style={{flex: 1}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{alignSelf: 'center'}}>
            <Spacer height={40} />
            {person.image ? (
              <Image style={styles.imgV} source={{uri: person.image}} />
            ) : (
              <View
                style={[
                  styles.imgV,
                  styles.center,
                  {backgroundColor: colors.primary},
                ]}>
                <Paragraph fontSize={24} color={colors.white}>
                  {getInitials(person.name)}
                </Paragraph>
              </View>
            )}
            <Spacer />
            <Paragraph>{person.name}</Paragraph>
          </View>
          <Spacer height={30} />
          <View style={styles.optionV}>
            {options.map((op, ind) => (
              <Pressable
                key={ind}
                onPress={() => {
                  if (op.hasRight) {
                    setBioMetric(!enableBiometrics);
                    return;
                  }

                  if (op.url) {
                    navigate(op.url as keyof HomeScreenParam);
                  }
                }}>
                <FlexedView
                  justifyContent="space-between"
                  style={styles.option}>
                  <FlexedView>
                    <Image style={styles.icon} source={op.icon} />
                    <Paragraph fontSize={16}>{op.label}</Paragraph>
                  </FlexedView>
                  {op.hasRight ? (
                    <AppSwitch
                      value={enableBiometrics}
                      onValueChange={() => setBioMetric(!enableBiometrics)}
                    />
                  ) : null}
                </FlexedView>
              </Pressable>
            ))}
          </View>
        </ScrollView>
      </ViewContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    height: widthPixel(30),
    width: widthPixel(30),
    marginRight: 15,
  },
  imgV: {
    height: heightPixel(100),
    width: widthPixel(100),
    borderRadius: widthPixel(100) / 2,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  option: {
    marginBottom: 30,
  },
  optionV: {
    padding: 20,
    backgroundColor: colors.white,
    borderRadius: 15,
    flex: 1,
  },
});

type Option = {
  label: string;
  url?: keyof HomeScreenParam;
  hasRight?: boolean;
  icon: ImageSourcePropType;
};

const options: Option[] = [
  {
    label: 'Edit Profile',
    url: 'EditProfile',
    icon: sharedImages.icons.editUser,
  },
  {
    label: 'Wallet',
    url: 'Wallet',
    icon: sharedImages.icons.wallet,
  },
  {
    label: 'Biometric Login',
    hasRight: true,
    icon: sharedImages.icons.scan,
  },
  {
    label: 'Referals',
    url: 'Referals',
    icon: sharedImages.icons.people,
  },
  {
    label: 'Help & support',
    url: 'HelpAndSupport',
    icon: sharedImages.icons.support,
  },
  {
    label: 'Security',
    url: 'Security',
    icon: sharedImages.icons.lock,
  },
  {
    label: 'Log Out',
    icon: sharedImages.icons.logout,
  },
];

export default Profile;
