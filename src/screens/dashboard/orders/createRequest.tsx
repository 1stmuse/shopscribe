import {StyleSheet} from 'react-native';
import React from 'react';
import colors from '@utility/colors';
import Header from '@components/header';
import {ViewContainer} from '@components/view';

const CreateRequest = () => {
  return (
    <ViewContainer style={styles.container}>
      <Header title="Create Request" />
    </ViewContainer>
  );
};

export default CreateRequest;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
