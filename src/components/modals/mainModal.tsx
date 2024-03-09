import {View, Image, StyleSheet, useWindowDimensions} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import {Paragraph} from '@components/text/text';
import {AppButton} from '@components/button';
import sharedImages from '@utility/sharedImages';
import {Spacer} from '@components/view';

export type modalType = 'success' | 'error';

interface IProp {
  visible: boolean;
  closeModal: () => void;
  type: modalType;
  title: string;
  description: string;
  action: () => void;
  btnLabel: string;
}

const MainModal = ({
  title,
  description,
  type,
  action,
  btnLabel,
  visible,
  closeModal,
}: IProp) => {
  const {height} = useWindowDimensions();
  return (
    <Modal
      onBackButtonPress={closeModal}
      isVisible={visible}
      style={{margin: 0, flex: 1}}>
      <View style={styles.container}>
        <Spacer height={height * 0.2} />
        <View>
          <Image
            source={
              type === 'success'
                ? sharedImages.successIcon
                : sharedImages.errorIcon
            }
            resizeMode="contain"
            style={styles.img}
          />
        </View>
        <Spacer height={50} />
        <View style={{width: '100%'}}>
          <Paragraph fontWeight="600" fontSize={22} textAlign="center">
            {title}
          </Paragraph>
          <Paragraph mt={10} fontSize={17} fontWeight="300" textAlign="center">
            {description}
          </Paragraph>
          <Spacer height={40} />
          <AppButton onPress={action} variant="primary" text={btnLabel} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,

    alignItems: 'center',
    flex: 1,
  },
  img: {
    width: 200,
    height: 200,
  },
});

export default MainModal;
