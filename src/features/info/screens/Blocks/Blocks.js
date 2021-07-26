import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, SafeAreaView, View } from 'react-native';
import {
  Container,
  Title,
  Wrapper,
  HeaderContainer,
  StatsView,
} from '../../components/styles';
import { Tab1, Tab2, Tab3 } from './Tabs';
import { SelectCoin } from '../../../../components/SelectCoin';

export const Blocks = ({ navigation }) => {
  return (
    <Wrapper>

      <Container>
        <HeaderContainer>
          <Title>Blocks</Title>
          <SelectCoin crypto="ETH"/>
        </HeaderContainer>
      </Container>
      
      <StatsView 
        horizontal
        pagingEnabled={true}
        >
          <Tab1/>
          <Tab2/>
          <Tab3/>
      </StatsView>

      <StatusBar barStyle="auto" />
    </Wrapper>
  );
}