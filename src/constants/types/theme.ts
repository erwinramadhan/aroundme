import React from 'react';
import {ColorValue} from 'react-native';

export interface ITheme {
  colors: ThemeColors;
  fonts: ThemeFonst;
}

export interface ThemeFonst {
  thin: string;
  light: string;
  extraLight: string;
  regular: string;
  medium: string;
  semiBold: string;
  bold: string;
  extraBold: string;
  black: string;
}

export interface IThemeProvider {
  theme?: ITheme;
  children?: React.ReactNode;
  setTheme?: (theme?: ITheme) => void;
}

export interface ThemeColors {
  athensGray: ColorValue;
  alto: ColorValue;
  gray: ColorValue;
  primary: ColorValue;
  text: ColorValue;
}
