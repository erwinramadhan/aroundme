import React from 'react';
import GetContext from './src/context/Context';

import AppNavigation from './src/navigation/AppNavigation';
import {ThemeProvider} from './src/context/Theme';
import {Provider} from 'react-redux';

import {store} from './src/store/store';

const App = () => {
  const Context = GetContext();
  return (
    <Provider store={store}>
      <Context.DataProvider>
        <ThemeProvider>
          <AppNavigation />
        </ThemeProvider>
      </Context.DataProvider>
    </Provider>
  );
};

export default App;
