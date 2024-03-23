import {Pressable, ScrollView, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import colors from '@utility/colors';
import {FlexedView, Spacer, ViewContainer} from '@components/view';
import Header from '@components/header';
import {useAppSelector} from '@store/hooks';
import {clearOrders, deleteOrderItem, getOrdersSelector} from '@store/orders';
import {Paragraph} from '@components/text/text';
import {AppButton} from '@components/button';
import Entypo from 'react-native-vector-icons/Entypo';
import {heightPixel} from '@utility/pxToDpConvert';
import {useNavigation} from '@react-navigation/core';
import {CompositeNavigationProp} from '@react-navigation/native';
import {
  BottomScreenParams,
  HomeScreenParam,
} from '@navigation/dashboard/screens';

import {useModal} from '@hooks/useModal';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {StackNavigationProp} from '@react-navigation/stack';
import {useDispatch} from 'react-redux';

type composNav = CompositeNavigationProp<
  StackNavigationProp<HomeScreenParam>,
  BottomTabNavigationProp<BottomScreenParams>
>;

const RequestSummary = () => {
  const dispatch = useDispatch();
  const {navigate} = useNavigation<composNav>();
  const orders = useAppSelector(getOrdersSelector);
  const [selectedItem, setSelectedItem] = useState(0);
  const [collapse, setCollapse] = useState(true);
  const {show, close} = useModal();

  const shouldCollaps = (selected: number): boolean => {
    return selected === selectedItem && collapse;
  };

  const toggleCollapse = (selected: number) => {
    if (selected === selectedItem) {
      setCollapse(!collapse);
    } else {
      setSelectedItem(selected);
      setCollapse(true);
    }
  };

  const sendRequest = () => {
    show({
      title: 'Request Sent successfully',
      description:
        'Your order request has been sent to the shopper and ypu will get a response soon',
      type: 'success',
      action: () => {
        close();
        dispatch(clearOrders());
        navigate('Orders');
      },
      btnLabel: 'View Order',
    });
  };

  return (
    <View style={styles.container}>
      <ViewContainer>
        <Header title={`Summary (${orders.length})`} />
        <Spacer />
      </ViewContainer>

      <ScrollView style={{backgroundColor: colors.border}}>
        <Spacer />
        <ViewContainer>
          {orders.map((order, ind) => (
            <ViewContainer key={ind} style={styles.card}>
              <FlexedView justifyContent="space-between">
                <Paragraph fontSize={18}>{order.name}</Paragraph>
                <Pressable onPress={() => toggleCollapse(ind)}>
                  <Entypo
                    name={`${
                      shouldCollaps(ind) ? 'chevron-up' : 'chevron-down'
                    }`}
                    size={20}
                  />
                </Pressable>
              </FlexedView>
              {shouldCollaps(ind) ? (
                <View>
                  <Spacer height={30} />
                  <FlexedView style={styles.row} justifyContent="space-between">
                    <Paragraph fontSize={16}>Category</Paragraph>
                    <Paragraph fontSize={16}>
                      {order.category ?? 'N/A'}
                    </Paragraph>
                  </FlexedView>
                  <FlexedView style={styles.row} justifyContent="space-between">
                    <Paragraph fontSize={16}>Description</Paragraph>
                    <Paragraph
                      style={{width: '60%'}}
                      fontSize={16}
                      textAlign="right">
                      {order.description ?? 'N/A'}
                    </Paragraph>
                  </FlexedView>
                  <FlexedView style={styles.row} justifyContent="space-between">
                    <Paragraph fontSize={16}>Quantity</Paragraph>
                    <Paragraph fontSize={16}>
                      {order.quantity ?? 'N/A'}
                    </Paragraph>
                  </FlexedView>
                  <FlexedView style={styles.row} justifyContent="space-between">
                    <Paragraph fontSize={16}>Size</Paragraph>
                    <Paragraph fontSize={16}>{order.size ?? 'N/A'}</Paragraph>
                  </FlexedView>
                  <FlexedView style={styles.row} justifyContent="space-between">
                    <Paragraph fontSize={16}>Images</Paragraph>
                    <Paragraph fontSize={16}>
                      {order.images?.length ?? 'N/A'}
                    </Paragraph>
                  </FlexedView>
                  <FlexedView style={styles.row} justifyContent="space-between">
                    <Paragraph fontSize={16}>Color</Paragraph>
                    <Paragraph fontSize={16}>{order.color ?? 'N/A'}</Paragraph>
                  </FlexedView>
                  <FlexedView style={styles.row} justifyContent="space-between">
                    <AppButton
                      variant="secondary"
                      text="Delete"
                      onPress={() => {
                        dispatch(deleteOrderItem(order));
                      }}
                      textStyle={{color: colors.primary}}
                      style={[styles.btn, {backgroundColor: colors.accent}]}
                    />
                    <AppButton
                      variant="secondary"
                      text="Edit"
                      onPress={() => {}}
                      textStyle={{color: colors.blue}}
                      style={[styles.btn, {backgroundColor: colors.blueLight}]}
                    />
                  </FlexedView>
                </View>
              ) : null}
            </ViewContainer>
          ))}
        </ViewContainer>
      </ScrollView>
      <ViewContainer>
        <Spacer />
        <AppButton
          variant="outline"
          text="Add more item"
          onPress={() => {
            navigate('CreateRequest');
          }}
        />
        <Spacer />
        <AppButton
          variant="primary"
          text="Send Request"
          onPress={sendRequest}
        />
        <Spacer height={50} />
      </ViewContainer>
    </View>
  );
};

export default RequestSummary;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  row: {
    marginBottom: heightPixel(20),
  },
  card: {
    backgroundColor: colors.white,
    paddingVertical: heightPixel(20),
    borderRadius: 10,
    marginBottom: heightPixel(20),
  },
  btn: {
    width: '47%',
  },
});
