import React from 'react';
import {StyleSheet, Text as NativeText} from 'react-native';
import {ITheme} from '../../constants';
import {IText} from '../../constants/types/components/text';
import GetContext from '../../context/Context';

const Context = GetContext();

const Text = ({children, style}: IText) => {
  const {theme} = Context.UseData();

  return (
    <NativeText style={StyleSheet.flatten([Style(theme).nativeText, style])}>
      {children}
    </NativeText>
  );
};

export default Text;

const Style = (theme: ITheme) =>
  StyleSheet.create({
    nativeText: {
      fontFamily: theme.fonts.regular,
    },
  });
