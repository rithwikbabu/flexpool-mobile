import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AppNavigator } from './AppNavigator';
import { MoreNavigator } from './MoreNavigator';

export const Navigation = () => {

  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};
