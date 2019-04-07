import React from 'react';
import {createAppContainer, createStackNavigator, createSwitchNavigator} from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import JobDetailScreen from "../screens/JobDetailScreen";
import LanguageSelectorScreen from "../screens/LanguageSelectorScreen";
import SettingsScreen from "../screens/SettingsScreen";

const LanguageSelectorStack = createStackNavigator({
  LanguageSelector: {screen: LanguageSelectorScreen}
});

export default createAppContainer(createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: MainTabNavigator,
  JobDetail: JobDetailScreen,
  LanguageSelectorStack,
}));
