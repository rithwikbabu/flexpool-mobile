import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

import { MoreSettings } from '../../features/more/screens/More';

const MoreStack = createStackNavigator();

export const MoreNavigator = () => {
  return (
    <MoreStack.Navigator
      headerMode="none"
      screenOptions={{ ...TransitionPresets.ModalPresentationIOS }}
    >
      <MoreStack.Screen
        name="More"
        component={More}
      />
    </MoreStack.Navigator>
  );
};
