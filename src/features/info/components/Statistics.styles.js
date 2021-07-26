import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(View)`
    flex: 1;
    background-color: ${(props) => props.theme.darkColors.bg.primary};
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
`;

export const Wrapper = styled(Container)`
    border-color: ${(props) => props.theme.darkColors.ui.border};
    width: 400px;
`;

export const StatBoxContainer = styled(View)`
    flex: 1;
    background-color: ${(props) => props.theme.darkColors.bg.primary};
    align-items: flex-start;
    justify-content: flex-start;
`;

export const ChartBoxContainer = styled(View)`
    flex: 1;
    background-color: ${(props) => props.theme.darkColors.bg.primary};
    align-items: flex-start;
    justify-content: flex-start;
    height: 100px;
`;

export const StatRow = styled(View)`
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
`;

const Card = styled(View)`
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.darkColors.ui.border};
  position: relative;
  background: ${(props) => props.theme.darkColors.bg.secondary};
  ${(p) =>
    p.padding &&
    `
    padding: 20px 20px;
  `}
`;

export const StatBox = styled(Card)`
    flex-grow: 1;
    min-width: 90%;
    margin: 10px;
`;

export const ChartBox = styled(StatBox)`
    min-width: 95%;
    min-height: 20%;
`

export const StatTitle = styled(Text)`
    color: ${(props) => props.theme.darkColors.text.primary};
    text-transform: uppercase;
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 8px;
`;

export const Value = styled(Text)`
    color: ${(props) => props.theme.darkColors.text.primary};
    font-size: 34px;
    font-weight: 600;
`;




