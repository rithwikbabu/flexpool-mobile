import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { MinerNavigator } from './MinerNavigator';
import { darkColors } from '../../infrastructure/theme/colors';
import { MoreNavigator } from './MoreNavigator';
import { InfoNavigator } from './InfoNavigator';

const TAB_ICON = {
  Info: 'browsers',
  Miner: 'hammer',
  More: 'ellipsis-horizontal-outline',
};

const Tab = createBottomTabNavigator();

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];

  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

export const AppNavigator = () => (
  <Tab.Navigator
    initialRouteName="Miner"
    screenOptions={
      createScreenOptions
    }
    tabBarOptions={{
      activeTintColor: darkColors.ui.primary,
      inactiveTintColor: darkColors.text.secondary,
      style: {
        backgroundColor: darkColors.bg.primary,
        borderTopColor: darkColors.ui.border,
      },
    }}
  >
    <Tab.Screen name="Info" component={InfoNavigator} />
    <Tab.Screen name="Miner" component={MinerNavigator} />
    <Tab.Screen name="More" component={MoreNavigator} />
  </Tab.Navigator>
);
