import React from 'react';
import { Dimensions, StatusBar } from 'expo-status-bar';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import {
  Container,
  Title,
  Wrapper,
  HeaderContainer,
  StatsView,

} from '../../components/styles';
import { Tab1, Tab2 } from './Tabs';
import { SelectCoin } from '../../../../components/SelectCoin';

export const Statistics = ({ navigation }) => {
  return (
    
    <Wrapper>
      <Container>
        <HeaderContainer>
          <Title>Statistics</Title>
          <SelectCoin crypto="ETH"/>
        </HeaderContainer>
      </Container>
      
      <StatsView 
        horizontal
        pagingEnabled={true}
        >
          <Tab1/>
          <Tab2/>
      </StatsView>
      <StatusBar barStyle="auto" />
    </Wrapper>
  );
}