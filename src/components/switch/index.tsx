import {Switch} from 'react-native';
import React from 'react';
import colors from '@utility/colors';

interface IProps {
  value: boolean;
  onValueChange: () => void;
}

const AppSwitch = ({value, onValueChange}: IProps) => {
  return (
    <Switch
      value={value}
      trackColor={{false: colors.border, true: colors.primary}}
      thumbColor="#fff"
      onValueChange={onValueChange}
    />
  );
};

export default AppSwitch;
