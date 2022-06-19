import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {useHeaderHeight} from '@react-navigation/elements';
import {SafeAreaInsetsContext} from 'react-native-safe-area-context';

import {IContainer} from '../../constants/types/components/container';

const Container = ({
  barBackgroundColor,
  barStyle,
  barTranslucent,
  children,
  containerStyle,
  hideStatusbar,
}: IContainer) => {
  const headerHeight = useHeaderHeight();

  return (
    <SafeAreaInsetsContext.Consumer>
      {insets => (
        <>
          <StatusBar
            hidden={hideStatusbar}
            barStyle={barStyle}
            translucent={barTranslucent}
            backgroundColor={barBackgroundColor}
          />
          <View style={{height: (insets?.top || 0) - headerHeight}} />
          <View style={StyleSheet.flatten([containerStyle, Style.container])}>
            {children}
          </View>
        </>
      )}
    </SafeAreaInsetsContext.Consumer>
  );
};

export default Container;

const Style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
