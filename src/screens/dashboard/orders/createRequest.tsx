import {
  Pressable,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import colors from '@utility/colors';
import Header from '@components/header';
import {Spacer, ViewContainer} from '@components/view';
import {Paragraph} from '@components/text/text';
import {AppTextInput} from '@components/TextInput';
import DropdownSelect from '@components/dropdownSelect';
import Entypo from 'react-native-vector-icons/Entypo';
import {heightPixel, widthPixel} from '@utility/pxToDpConvert';
import {AppButton} from '@components/button';
import {OrderObject, addOrderItem} from '@store/orders';
import {Image} from 'react-native-elements';
import {pickImage} from '@utility/helpers';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {HomeScreenParam} from '@navigation/dashboard/screens';
import {nav} from '../../../types';

const CreateRequest = () => {
  const {navigate} = useNavigation<nav<HomeScreenParam>>();
  const dispatch = useDispatch();
  const scrollRef = useRef<ScrollView>(null);
  const [itemDetail, setItemDetail] = useState<OrderObject>({
    category: '',
    description: '',
    quantity: '',
    color: '',
    name: '',
  });

  const [images, setImages] = useState<any[]>([]);

  const onInputChange = (field: string, value: string) => {
    setItemDetail(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const uplaodImage = () => {
    pickImage('upload', (err, img) => {
      if (!err) {
        setImages([...images, img as string]);
      }
    });
  };

  const deleteImg = (img: string) => {
    setImages(prev => prev.filter(i => i !== img));
  };

  const onContentSizeChanged = () => scrollRef.current?.scrollToEnd();

  const resetData = () => {
    setItemDetail({
      category: '',
      description: '',
      quantity: '',
      color: '',
      name: '',
    });
    setImages([]);
  };

  const addItem = () => {
    dispatch(addOrderItem({...itemDetail, images}));
    resetData();
    navigate('RequestSummary');
  };

  return (
    <ViewContainer style={styles.container}>
      <Header title="Create Request" />
      <ScrollView
        contentContainerStyle={{paddingBottom: 50}}
        showsVerticalScrollIndicator={false}>
        <Spacer height={30} />
        <Paragraph>Item information</Paragraph>
        <Spacer />
        <View>
          <AppTextInput
            onChangeText={text => onInputChange('name', text)}
            value={itemDetail.name}
            placeholder="Enter Item Name"
          />
          <DropdownSelect
            value={itemDetail.category}
            placeholder="Select"
            data={[
              {label: 'James', value: 'James'},
              {label: 'Josh', value: 'Josh'},
              {label: 'James', value: 'James'},
            ]}
            onSelect={item => {
              onInputChange('category', item.value);
            }}
          />
          <AppTextInput
            multiline
            placeholder="Enter Description"
            onChangeText={text => onInputChange('description', text)}
            value={itemDetail.description}
          />
          <AppTextInput
            placeholder="Enter Quantity"
            onChangeText={text => onInputChange('quantity', text)}
            value={itemDetail.quantity}
            keyboardType="number-pad"
          />
          <AppTextInput
            placeholder="Enter size (optional)"
            onChangeText={text => onInputChange('size', text)}
            value={itemDetail.size}
            keyboardType="number-pad"
          />
          <AppTextInput
            placeholder="Enter Color (optional)"
            onChangeText={text => onInputChange('color', text)}
            value={itemDetail.color}
          />
          <TouchableOpacity onPress={uplaodImage} style={styles.uploadV}>
            <Entypo name="plus" size={25} color={colors['black-shade']} />
            <Spacer />
            <Paragraph color={colors['black-shade']}>
              Add Image (create a moodboard)
            </Paragraph>
          </TouchableOpacity>
          {images.length ? (
            <View>
              <Spacer />
              <ScrollView
                ref={scrollRef}
                onContentSizeChange={onContentSizeChanged}
                horizontal
                showsHorizontalScrollIndicator={false}>
                {images.map(image => (
                  <View style={styles.img} key={image}>
                    <Pressable
                      style={styles.deleteImg}
                      onPress={() => deleteImg(image)}>
                      <Entypo name="trash" color={colors.primary} size={20} />
                    </Pressable>
                    <Image
                      source={{uri: image}}
                      style={{width: '100%', height: '100%'}}
                      resizeMode="cover"
                    />
                  </View>
                ))}
              </ScrollView>
            </View>
          ) : null}
        </View>
      </ScrollView>
      <View>
        <AppButton
          disabled={!itemDetail.name || !itemDetail.category}
          variant="primary"
          text="Add Item"
          onPress={addItem}
        />
        <Spacer height={50} />
      </View>
    </ViewContainer>
  );
};

export default CreateRequest;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  uploadV: {
    borderWidth: 1,
    backgroundColor: colors.accent,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: heightPixel(45),
    borderRadius: 8,
    borderStyle: 'dotted',
    borderColor: colors.primary,
  },
  img: {
    width: widthPixel(100),
    height: widthPixel(100),
    borderRadius: 8,
    overflow: 'hidden',
    marginRight: widthPixel(15),
  },
  deleteImg: {
    position: 'absolute',
    top: 5,
    right: 10,
    zIndex: 100,
    backgroundColor: colors.white,
    padding: 5,
    borderRadius: 8,
  },
});
