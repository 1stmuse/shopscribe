import React, {useState} from 'react';
import {Image, Pressable, ScrollView, StyleSheet, View} from 'react-native';
import {heightPixel, widthPixel} from '@utility/pxToDpConvert';
import {FlexedView, Spacer, ViewContainer} from '@components/view';
import {Paragraph} from '@components/text/text';
import {getInitials} from '@utility/helpers';
import colors from '@utility/colors';
import {HomeScreenParam} from '@navigation/dashboard/screens';
import sharedImages from '@utility/sharedImages';
import {useNavigation} from '@react-navigation/native';
import {nav} from '../../../types';
import Header from '@components/header';
import BottomSheet from '@components/bottomSheet';
import {AppTextInput} from '@components/TextInput';
import {AppButton} from '@components/button';

const person = {
  name: 'John Krasniki',
  image: '',
  email: 'jabocn@gmail.com',
  phoneNumber: '09088993344',
};

const EditProfile: React.FC = ({}) => {
  const {navigate} = useNavigation<nav<HomeScreenParam>>();
  const [showModal, setShowModal] = useState({show: false, type: ''});
  const [info, setInfo] = useState({
    email: person.email,
    phoneNumber: person.phoneNumber,
  });

  const closeModal = () => setShowModal({type: '', show: false});

  return (
    <View style={{flex: 1, backgroundColor: colors.white}}>
      <ViewContainer style={{flex: 1}}>
        <Header title="Edit Profile" />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Spacer height={40} />
          <View style={{alignSelf: 'center'}}>
            <Pressable style={styles.camV}>
              <Image source={sharedImages.icons.camera} />
            </Pressable>

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
            <Spacer height={35} />
            <Paragraph>{person.name}</Paragraph>
          </View>
          <Spacer height={30} />
          <FlexedView style={styles.item} justifyContent="space-between">
            <FlexedView style={{alignItems: 'flex-start'}}>
              <Image style={styles.icon} source={sharedImages.icons.mail} />
              <View>
                <Paragraph fontSize={19} color={colors['black-shade']}>
                  Email Address
                </Paragraph>
                <Paragraph fontWeight="600" mt={8} fontSize={16}>
                  {person.email}
                </Paragraph>
              </View>
            </FlexedView>
            <Pressable
              onPress={() => setShowModal({show: true, type: 'email'})}>
              <Paragraph fontSize={19} color={colors.primary} fontWeight="500">
                Edit
              </Paragraph>
            </Pressable>
          </FlexedView>
          <Spacer />
          <FlexedView style={styles.item} justifyContent="space-between">
            <FlexedView style={{alignItems: 'flex-start'}}>
              <Image style={styles.icon} source={sharedImages.icons.phone} />
              <View>
                <Paragraph fontSize={19} color={colors['black-shade']}>
                  Phone Number
                </Paragraph>
                <Paragraph mt={8} fontWeight="600" fontSize={16}>
                  {person.phoneNumber}
                </Paragraph>
              </View>
            </FlexedView>
            <Pressable
              onPress={() => setShowModal({show: true, type: 'phone'})}>
              <Paragraph fontSize={19} color={colors.primary} fontWeight="500">
                Edit
              </Paragraph>
            </Pressable>
          </FlexedView>
          <Spacer />
          <FlexedView style={styles.item} justifyContent="space-between">
            <FlexedView>
              <Image style={styles.icon} source={sharedImages.icons.trash} />
              <View>
                <Paragraph
                  fontSize={19}
                  color={colors.primary}
                  fontWeight="700">
                  Delete Account
                </Paragraph>
              </View>
            </FlexedView>
          </FlexedView>
        </ScrollView>
        <BottomSheet visible={showModal.show} close={closeModal}>
          <ViewContainer style={styles.bottomV}>
            {showModal.type === 'email' ? (
              <View>
                <Paragraph fontSize={17}>Edit email address</Paragraph>
                <Spacer />
                <AppTextInput
                  value={info.email}
                  onChangeText={text => setInfo({...info, email: text})}
                />
                <Spacer height={30} />
                <AppButton
                  variant="primary"
                  text="Verify"
                  onPress={() => {
                    closeModal();
                    navigate('VerifyInfo', {type: 'email', data: info.email});
                  }}
                />
              </View>
            ) : (
              <View>
                <Paragraph fontSize={17}>Edit phone number</Paragraph>
                <Spacer />
                <AppTextInput
                  value={info.phoneNumber}
                  onChangeText={text => setInfo({...info, phoneNumber: text})}
                />
                <Spacer height={30} />
                <AppButton
                  variant="primary"
                  text="Verify"
                  onPress={() => {
                    closeModal();
                    navigate('VerifyInfo', {
                      type: 'phone',
                      data: info.phoneNumber,
                    });
                  }}
                />
              </View>
            )}
          </ViewContainer>
        </BottomSheet>
      </ViewContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomV: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingTop: 20,
    backgroundColor: colors.white,
    height: heightPixel(300),
  },
  camV: {
    position: 'absolute',
    backgroundColor: colors.white,
    height: 50,
    width: 50,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100,
    right: -10,
    bottom: 30,
    borderColor: colors.border,
    borderWidth: 3,
  },
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
  item: {
    borderWidth: 3,
    paddingVertical: heightPixel(15),
    paddingHorizontal: widthPixel(15),
    borderRadius: 15,
    borderColor: colors.border,
  },
});

export default EditProfile;
