/* eslint-disable react-native/no-inline-styles */
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import {FlexedView, Spacer, ViewContainer} from '@components/view';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Paragraph} from '@components/text/text';
import {useNavigation} from '@react-navigation/native';
import {HomeScreenParam} from '@navigation/dashboard/screens';
import {nav} from '../../types';
import useAppColor from '@hooks/useAppColor';
import {widthPixel} from '@utility/pxToDpConvert';
import colors from '@utility/colors';
import data from '../../data';
import {getInitials} from '@utility/helpers';
import sharedImages from '@utility/sharedImages';
import Entypo from 'react-native-vector-icons/Entypo';
import {AppButton} from '@components/button';
import ReviewCard from './components/ReviewCard';

const ShopperProfile = () => {
  const {width} = useWindowDimensions();
  const {profile} = data;
  const {goBack, navigate} = useNavigation<nav<HomeScreenParam>>();
  const appColor = useAppColor();
  return (
    <View style={styles.container}>
      <ViewContainer>
        <FlexedView justifyContent="space-between">
          <TouchableOpacity onPress={goBack} style={styles.circle}>
            <AntDesign name="close" size={24} color={appColor['black-shade']} />
          </TouchableOpacity>
          <Paragraph fontSize={17} lineHeight={21} fontWeight="600">
            Profile
          </Paragraph>
          <View />
        </FlexedView>
      </ViewContainer>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 50}}>
        <Spacer />
        <View style={styles.backdropView}>
          {profile.backdrop ? (
            <Image source={profile.backdrop} style={styles.backdrop} />
          ) : (
            <View
              style={[
                styles.backdrop,
                {
                  backgroundColor: appColor.primary,
                  height: '100%',
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                },
              ]}>
              <Paragraph fontSize={50} fontWeight="bold" color={appColor.white}>
                {getInitials(profile.name)}
              </Paragraph>
            </View>
          )}
          <View style={styles.imgView}>
            <Image source={profile.profileImg} style={styles.img} />
          </View>
        </View>
        <Spacer height={70} />
        <ViewContainer>
          <FlexedView justifyContent="space-between">
            <FlexedView>
              <Paragraph fontSize={18}>{profile.name}</Paragraph>
            </FlexedView>
            <FlexedView>
              <Entypo
                name="star"
                style={{marginLeft: 5}}
                color={appColor.yellow}
                size={20}
              />
              <Paragraph>{2.5}</Paragraph>
            </FlexedView>
          </FlexedView>
          <Spacer height={5} />
          <FlexedView>
            <Image
              source={sharedImages.icons.location}
              tintColor={appColor.black}
              style={{width: 20, height: 20, marginRight: 5}}
            />
            <Paragraph color={appColor['black-shade']}>
              {profile.address}
            </Paragraph>
          </FlexedView>
          <Spacer height={20} />
          <View style={styles.catV}>
            {profile.categories.map((ct, ind) => (
              <View style={styles.cat} key={ind}>
                <Paragraph fontWeight="300" color={appColor['black-shade']}>
                  {ct}
                </Paragraph>
              </View>
            ))}
          </View>
          <Spacer height={20} />
          <FlexedView justifyContent="space-between">
            <Paragraph fontSize={18}>About Shopper</Paragraph>
            <Entypo name="chevron-up" size={24} />
          </FlexedView>
          <View>
            <Spacer />
            <Paragraph fontWeight="300">{profile.bio}</Paragraph>
          </View>
          <Spacer height={40} />
          <FlexedView justifyContent="space-between">
            <Paragraph fontSize={18}>Gallery</Paragraph>
            <Entypo name="chevron-up" size={24} />
          </FlexedView>
          <View>
            <Spacer />
            <FlatList
              data={profile.gallery}
              scrollEnabled={false}
              renderItem={({item}) => (
                <Image
                  style={[
                    styles.galImg,
                    {
                      width: width * 0.42,
                    },
                  ]}
                  source={item}
                />
              )}
              numColumns={2}
            />
          </View>
          <Spacer height={40} />
          <FlexedView justifyContent="space-between">
            <Paragraph fontSize={18}>Reviews</Paragraph>
            <Entypo name="chevron-up" size={24} />
          </FlexedView>
          <View>
            <Spacer />
            {profile.review.length > 0 &&
              profile.review.map((rv, ind) => (
                <ReviewCard item={rv} key={ind} />
              ))}
          </View>
        </ViewContainer>
      </ScrollView>
      <ViewContainer>
        <AppButton
          variant="primary"
          text="Send Shopping Request"
          onPress={() => navigate('CreateRequest')}
        />
        <Spacer height={40} />
      </ViewContainer>
    </View>
  );
};

export default ShopperProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  circle: {
    width: widthPixel(35),
    height: widthPixel(35),
    borderRadius: widthPixel(35) / 2,
    backgroundColor: colors.border,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backdropView: {
    width: '100%',
    height: widthPixel(200),
    justifyContent: 'center',
    alignItems: 'center',
  },
  backdrop: {
    width: '100%',
    height: '100%',
  },
  imgView: {
    width: widthPixel(120),
    height: widthPixel(120),
    borderRadius: widthPixel(120) / 2,
    overflow: 'hidden',
    borderWidth: 7,
    borderColor: colors.white,
    position: 'absolute',
    bottom: -50,
    left: 20,
  },
  img: {
    width: '100%',
    height: '100%',
  },
  catV: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cat: {
    backgroundColor: colors.border,
    padding: 8,
    paddingHorizontal: 10,
    marginHorizontal: 5,
    borderRadius: 15,
    marginBottom: 5,
  },
  galImg: {
    marginHorizontal: 5,
    borderRadius: 15,
    marginBottom: 10,
  },
});
