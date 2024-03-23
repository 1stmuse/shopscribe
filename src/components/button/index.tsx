/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {
  ActivityIndicator,
  StyleProp,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
  Text,
} from 'react-native';
import {heightPixel, widthPixel} from '@utility/pxToDpConvert';
import colors from '@utility/colors';

type Variant = 'primary' | 'secondary' | 'outline';

interface ButtonProps {
  onPress?: () => void;
  text: string;
  style?: StyleProp<ViewStyle>;
  isLoading?: boolean;
  textStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
  icon?: React.ReactElement;
  height?: number;
  variant: Variant;
}

const buttonStyle: Record<Variant, StyleProp<ViewStyle>> = {
  primary: {
    backgroundColor: colors.primary,
  },
  secondary: {
    backgroundColor: colors.border,
  },
  outline: {
    borderWidth: 1,
    borderColor: colors.primary,
    backgroundColor: 'transparent',
  },
};

export const AppButton: React.FC<ButtonProps> = ({
  isLoading,
  text,
  onPress,
  style,
  textStyle,
  disabled,
  height,
  variant = 'primary',
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      disabled={disabled}
      style={[
        buttonStyle[variant],
        {
          height: heightPixel(height ?? 56),
          borderRadius: widthPixel(8),
          alignItems: 'center',
          justifyContent: 'center',
          opacity: disabled ? 0.3 : 1,
        },
        style,
      ]}>
      {!isLoading ? (
        <Text
          style={[
            {
              color:
                variant === 'primary'
                  ? '#fff'
                  : variant == 'outline'
                  ? colors.primary
                  : colors.black,
            },
            textStyle,
          ]}>
          {text}
        </Text>
      ) : (
        <ActivityIndicator color="#fff" animating={isLoading} size="small" />
      )}
    </TouchableOpacity>
  );
};
