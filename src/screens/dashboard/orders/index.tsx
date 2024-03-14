/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {Platform, View} from 'react-native';
import {widthPixel} from '@utility/pxToDpConvert';
import {ViewContainer} from '@components/view';
import {Paragraph} from '@components/text/text';

const Orders: React.FC = ({}) => {
  return (
    <View
      style={{
        paddingTop: Platform.OS === 'ios' ? 50 : 10,
        paddingHorizontal: widthPixel(20),
      }}>
      <ViewContainer>
        <Paragraph fontSize={17} lineHeight={21} fontWeight="400">
          Orders
        </Paragraph>
      </ViewContainer>
    </View>
  );
};

export default Orders;
