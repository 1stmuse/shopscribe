import {NavigatorScreenParams} from '@react-navigation/native';

export type HomeScreenParam = {
  Tab: NavigatorScreenParams<BottomScreenParams>;
  Location: undefined;
  ShopperProfile: undefined;
  CreateRequest: undefined;
  RequestSummary: undefined;
  ShoppersList: {category: string};
  EditProfile: undefined;
  Wallet: undefined;
  Referals: undefined;
  HelpAndSupport: undefined;
  Security: undefined;
  VerifyInfo: {type: 'email' | 'phone'; data: string};
  ChangePassword: undefined;
  ChangePin: undefined;
};

export type BottomScreenParams = {
  Dashboard: undefined;
  Search: undefined;
  Orders: undefined;
  Profile: undefined;
};
