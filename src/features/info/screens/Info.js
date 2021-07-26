import React from 'react';
import { ScrollView } from 'react-native';
import { Statistics } from './Statistics/Statistics';
import { Blocks } from './Blocks/Blocks';
import { Miners } from './Miners/Miners';
import { SafeView } from '../components/Info.styles';
import styled from 'styled-components/native';

const ScrollContainer = styled(ScrollView)`
  background-color: ${(props) => props.theme.darkColors.bg.primary};
`;

export const Info = () => {
  return (
    <>
        <SafeView/>
        <ScrollContainer>
          <Statistics/>
          <Blocks/>
          <Miners/>
        </ScrollContainer>
        
    </>
  );
};
