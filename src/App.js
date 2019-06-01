import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Provider } from 'react-redux';
import store from './store';
import MainScreen from './screens/Main';
import SettingsScreen from './screens/Settings';
import { ThemeProvider } from './contexts/Theme';

const TabNavigator = createBottomTabNavigator(
  {
    Main: MainScreen,
    Settings: SettingsScreen,
  }
);

const AppContainer = createAppContainer(TabNavigator);

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <AppContainer />
      </ThemeProvider>
    </Provider>
  );
}

export default App;