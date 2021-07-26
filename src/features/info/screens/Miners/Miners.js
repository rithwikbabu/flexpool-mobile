import React from 'react';
import { Dimensions, StatusBar } from 'expo-status-bar';
import { ScrollView, View } from 'react-native';
import {
  Container,
  Title,
  Wrapper,
  HeaderContainer,
  StatsView,

} from '../../components/styles';
import { Tab1, Tab2 } from './Tabs';
import { SelectCoin } from '../../../../components/SelectCoin';

export const Miners = ({ navigation }) => {
  return (
    
    <Wrapper>
      <Container>
        <HeaderContainer>
          <Title>Miners</Title>
          <SelectCoin crypto="ETH"/>
        </HeaderContainer>
      </Container>
      
      <StatsView 
        horizontal
        pagingEnabled={true}
        >
          <Tab2/>
          <Tab1/>
      </StatsView>
      <StatusBar barStyle="auto" />
    </Wrapper>
  );
}