import {StyleSheet} from 'react-native';
import {ITheme} from '../../constants';

const Styles = ({colors}: ITheme) =>
  StyleSheet.create({
    homeText: {
      color: colors.primary,
    },
  });

export default Styles;
