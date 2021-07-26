import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

import { MinerHome } from '../../features/miner/screens/MinerHome';
import { MinerDetails } from '../../features/miner/screens/MinerDetails';

const MinerStack = createStackNavigator();

export const MinerNavigator = () => {
  return (
    <MinerStack.Navigator
      headerMode="none"
      screenOptions={{ 
        backgroundColor: "#151519",
      }}
    >
      <MinerStack.Screen
        name="Miner"
        component={MinerHome}
      />

      <MinerStack.Screen
        name="Details"
        component={MinerDetails}
      />
    </MinerStack.Navigator>
  );
};
