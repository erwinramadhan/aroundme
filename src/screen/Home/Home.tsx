import React from 'react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

import Container from '@components/Container/Container';
import GetContext from '../../context/Context';
import Text from '@components/Text/Text';
import {useAppSelector} from '@hooks/hooks';

import Styles from './style';

const Context = GetContext();
GoogleSignin.configure({
  webClientId:
    '728383528534-7q4v8q8e1d9jno75pounoih4cp8869o4.apps.googleusercontent.com',
});

const Home = () => {
  const {theme} = Context.UseData();
  const {name} = useAppSelector(state => state.user);
  console.log('user', name);
  return (
    <Container barBackgroundColor={theme.colors.primary}>
      <Text style={Styles(theme).homeText}>Home</Text>
    </Container>
  );
};

export default Home;
