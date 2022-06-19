import React, {useMemo} from 'react';
import {TextInput, Text, View, TouchableOpacity} from 'react-native';
import {IInputField} from '../../constants/types/components/inputField';

import Styles from './style';

const InputField = ({title, theme, placeholder, endadornment}: IInputField) => {
  const style = Styles(theme, endadornment);

  //  Title component will render if title value is parsed on props by parent component
  const renderTitle = useMemo(() => {
    if (title) {
      return <Text style={style.title}>{title}</Text>;
    }
    return null;
  }, [style.title, title]);

  const renderRightEndadornment = useMemo(() => {
    if (endadornment?.right?.element) {
      if (endadornment?.right?.isButton) {
        return (
          <TouchableOpacity>{endadornment.right.element}</TouchableOpacity>
        );
      }
      return endadornment?.right?.element;
    }
    return false;
  }, [endadornment?.right?.element, endadornment?.right?.isButton]);

  return (
    <>
      {renderTitle}
      <View style={style.container}>
        {endadornment?.left}
        <TextInput
          style={style.textInput}
          placeholder={placeholder}
          placeholderTextColor={theme.colors.gray}
        />
        {renderRightEndadornment}
      </View>
    </>
  );
};

export default InputField;
