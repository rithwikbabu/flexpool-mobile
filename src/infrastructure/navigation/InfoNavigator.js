import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

import { Info } from '../../features/info/screens/Info';

const InfoStack = createStackNavigator();

export const InfoNavigator = () => {
  return (
    <InfoStack.Navigator
      headerMode="none"
      screenOptions={{ ...TransitionPresets.ModalPresentationIOS }}
    >
      <InfoStack.Screen
        name="Info"
        component={Info}
      />
    </InfoStack.Navigator>
  );
};
