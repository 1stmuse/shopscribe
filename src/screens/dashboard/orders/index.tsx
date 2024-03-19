import React from 'react';
import {View} from 'react-native';
import {ViewContainer} from '@components/view';
import {Paragraph} from '@components/text/text';
import useAppColor from '@hooks/useAppColor';

const Orders: React.FC = ({}) => {
  const appColor = useAppColor();
  return (
    <View style={{flex: 1, backgroundColor: appColor.white}}>
      <ViewContainer>
        <Paragraph fontSize={17} lineHeight={21} fontWeight="400">
          Orders
        </Paragraph>
      </ViewContainer>
    </View>
  );
};

export default Orders;
