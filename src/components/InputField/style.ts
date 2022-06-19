import {StyleSheet} from 'react-native';

import {ITheme} from '../../constants';
import {IInputField} from '../../constants/types/components/inputField';

const Styles = (theme: ITheme, endadornment?: IInputField['endadornment']) =>
  StyleSheet.create({
    title: {
      fontSize: 14,
      color: theme.colors.text,
      fontFamily: theme.fonts.bold,
    },
    container: {
      backgroundColor: theme.colors.athensGray,
      borderRadius: 5,
      marginTop: 8,
      paddingLeft: 16,
      paddingRight: endadornment?.right?.isButton ? 0 : 16,
      height: 45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    textInput: {
      flex: endadornment?.right ? 1 : undefined,
      fontSize: 14,
      fontFamily: theme.fonts.regular,
    },
  });

export default Styles;
