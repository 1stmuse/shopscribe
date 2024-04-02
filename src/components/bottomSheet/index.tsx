import {StyleSheet} from 'react-native';
import React, {PropsWithChildren} from 'react';
import Modal from 'react-native-modal';

interface Iprops extends PropsWithChildren {
  visible: boolean;
  close: () => void;
}

const BottomSheet = ({visible, close, children}: Iprops) => {
  return (
    <Modal
      style={styles.main}
      isVisible={visible}
      onBackdropPress={close}
      onBackButtonPress={close}>
      {children}
    </Modal>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  main: {
    margin: 0,
    justifyContent: 'flex-end',
  },
});
