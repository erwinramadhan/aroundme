import {ITheme, ThemeColors, ThemeFonst} from '../types/theme';

export const COLORS: ThemeColors = {
  athensGray: '#EFF1F5',
  alto: '#D9D9D9',
  gray: '#929292',
  primary: '#005BFF',
  text: '#000000',
};

export const FONTS: ThemeFonst = {
  black: 'Inter-Black',
  bold: 'Inter-Bold',
  extraBold: 'Inter-ExtraBold',
  extraLight: 'Inter-ExtraLight',
  light: 'Inter-Light',
  medium: 'Inter-Medium',
  regular: 'Inter-Regular',
  semiBold: 'Inter-SemiBold',
  thin: 'Inter-Thin',
};

export const light: ITheme = {
  colors: COLORS,
  fonts: FONTS,
};
