import React, {useState} from 'react';
import {Pressable, ScrollView, StyleSheet, View} from 'react-native';
import {FlexedView, Spacer, ViewContainer} from '@components/view';
import {Paragraph} from '@components/text/text';
import colors from '@utility/colors';
import {OrderItemCard} from './components/OrderItemCard';

const Taboptions = ['Requested', 'Ongoing', 'Completed'];

const Orders: React.FC = ({}) => {
  const [selectedTab, setSelectedTab] = useState('requested');
  return (
    <View style={{flex: 1, backgroundColor: colors.white}}>
      <ViewContainer style={{flex: 1}}>
        <Paragraph fontSize={20} lineHeight={25} fontWeight="400">
          Orders
        </Paragraph>
        <Spacer />
        <FlexedView justifyContent="space-around">
          {Taboptions.map((tb, ind) => (
            <Pressable
              onPress={() => setSelectedTab(tb)}
              style={[
                styles.tab,
                {
                  backgroundColor:
                    selectedTab.toLowerCase() === tb.toLocaleLowerCase()
                      ? colors.black
                      : colors.border,
                },
              ]}
              key={ind}>
              <Paragraph
                color={
                  selectedTab.toLowerCase() === tb.toLocaleLowerCase()
                    ? colors.white
                    : colors.black
                }
                textAlign="center"
                fontWeight="500">
                {tb}
              </Paragraph>
            </Pressable>
          ))}
        </FlexedView>
        <Spacer />
        <ScrollView showsVerticalScrollIndicator={false}>
          {Array(5)
            .fill('ag')
            .map((item, ind) => (
              <OrderItemCard
                item={item}
                type={selectedTab.toLocaleLowerCase()}
                key={ind}
              />
            ))}
        </ScrollView>
      </ViewContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  tab: {
    // flex: 1,
    padding: 10,
    minWidth: '30%',
    borderRadius: 30,
  },
});

export default Orders;
