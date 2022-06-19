import React from 'react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

import Container from '@components/Container/Container';
import GetContext from '../../context/Context';
import Text from '@components/Text/Text';
import {useAppSelector} from '@hooks/hooks';
import {GOOGLE_CLIENT_ID} from '@env';

import Styles from './style';

const Context = GetContext();
GoogleSignin.configure({
  webClientId: GOOGLE_CLIENT_ID,
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
