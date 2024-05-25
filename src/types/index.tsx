import {StackNavigationProp} from '@react-navigation/stack';
import {ParamListBase} from '@react-navigation/native';

export type nav<T extends ParamListBase> = StackNavigationProp<T>;
export type DropDownItem = {
  value: string;
  label: string;
};

export type SectionData = {
  title: string;
  data: [];
};
