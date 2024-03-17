import {Paragraph} from '@components/text/text';
import {FlexedView} from '@components/view';
import {widthPixel} from '@utility/pxToDpConvert';
import React, {ReactNode} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import Back from '@assets/svgs/back.svg';
import {useNavigation} from '@react-navigation/native';
import {nav} from '../../types/index';
import {HomeScreenParam} from '@navigation/dashboard/screens';
import colors from '@utility/colors';

interface Props {
  title?: string;
  backAction?: () => void;
  isAuth?: boolean;
  rightIcon?: ReactNode;
}

const Header = ({title, backAction, isAuth = false, rightIcon}: Props) => {
  const {goBack} = useNavigation<nav<HomeScreenParam>>();
  return (
    <View style={[styles.container]}>
      <FlexedView justifyContent="space-between">
        <Pressable
          onPress={() => {
            backAction ? backAction() : goBack();
          }}>
          <FlexedView>
            {isAuth ? (
              <Back />
            ) : (
              <View style={styles.circle}>
                <Back height={15} width={15} />
              </View>
            )}
          </FlexedView>
        </Pressable>
        {title ? (
          <Paragraph fontSize={16} lineHeight={21} fontWeight="500">
            {title}
          </Paragraph>
        ) : null}
        {rightIcon ? rightIcon : <View />}
      </FlexedView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
  },
  circle: {
    width: widthPixel(35),
    height: widthPixel(35),
    borderRadius: widthPixel(35) / 2,
    backgroundColor: colors.border,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Header;
