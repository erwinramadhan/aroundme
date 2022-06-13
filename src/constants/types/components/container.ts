import {ReactNode} from 'react';
import {ColorValue, StatusBarStyle, StyleProp, ViewStyle} from 'react-native';

export type IContainer = {
  barBackgroundColor?: ColorValue | undefined;
  barStyle?: StatusBarStyle | null | undefined;
  barTranslucent?: boolean | undefined;
  children: ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
  hideStatusbar?: boolean | undefined;
};
