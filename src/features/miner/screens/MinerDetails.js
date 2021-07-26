import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, } from 'react-native';
import React, { useState } from 'react';
import {
  Container,
  Header,
  Text,
} from '../components/MinerDetails.styles';
import { TabNav } from '../components/TabNav';
import { Tab2 } from '../../info/screens/Blocks/Tabs';
import { Spacer } from '../../../components/Spacer/Spacer';

export const MinerDetails = ({ navigation }) => {
  const openSettings = () => {
    navigation.navigate('Details');
  }

  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43]
      }
    ]
  };
  
  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };

  return (
    <Container style={{paddingBottom:"10%"}}>
    <StatusBar style={{color:"#151519"}}></StatusBar>
      <SafeAreaView/>
      <Header 
        address="0xBab721E0B7720...4D5479Cb164d4Eb"
        crypto="eth"
        joined="4"
      />
      <Spacer size="xl"/>
      <TabNav/>
      <Spacer size="l"/>
      <Tab2/>
      <StatusBar barStyle="auto" />
    </Container>
  );
}