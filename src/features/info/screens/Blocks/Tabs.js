import React from 'react';
import {
  Wrapper,
  StatBoxContainer,
  StatBox,
  StatTitle,
  Value,
  StatRow,
} from '../../components/Blocks.styles';
import { View, Dimensions } from 'react-native';
import {
  LineChart,
} from "react-native-chart-kit";
import { ColumnContainer, ChartContainer, HeaderText, RowText, RowTextGreen, RowTextBlue } from '../../components/Blocks.styles';
import { Infoicon } from '../../../../components/Infoicon';

export const Tab1 = ({ navigation }) => {
  return (
    
    <Wrapper style={{width: Dimensions.get("window").width}}>
        <StatRow>
            <StatBoxContainer>
              <StatBox padding>
                <StatTitle>average luck  <Infoicon/></StatTitle>
                <Value>99.76%</Value>
              </StatBox>
            </StatBoxContainer>

            <StatBoxContainer>
              <StatBox padding>
                <StatTitle>current luck <Infoicon/></StatTitle>
                <Value>0.87%</Value>
              </StatBox>
            </StatBoxContainer>
          </StatRow>

          <StatRow>
            <StatBoxContainer>
              <StatBox padding>
                <StatTitle>network hashrate</StatTitle>
                <Value>508.3 TH/s</Value>
              </StatBox>
            </StatBoxContainer>

            <StatBoxContainer>
              <StatBox padding>
                <StatTitle>network difficulty</StatTitle>
                <Value>6.85 PH</Value>
              </StatBox>
            </StatBoxContainer>
          </StatRow>
    </Wrapper>
  );
}

export const Tab2 = ({ navigation }) => {
  return (
    <View>
      <LineChart
        data={{
          labels: ["18:00", "21:00", "Jul 23", "03:00", "06:00", "09:00"],
          datasets: [
            {
              data: [
                Math.random() * 10,
                Math.random() * 10,
                Math.random() * 10,
                Math.random() * 10,
                Math.random() * 10,
                Math.random() * 10
              ]
            }
          ]
        }}
        width={Dimensions.get("window").width - 10} // from react-native
        height={240}
        yAxisLabel=""
        yAxisSuffix="TH/s"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: "#1c1c1f",
          backgroundGradientFrom: "#1c1c1f",
          backgroundGradientTo: "#1c1c1f",
          decimalPlaces: 1, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16
          },
          propsForDots: {
            r: "0",
            strokeWidth: "2",
            // stroke: "#ffa726"
          }
        }}
        bezier
        style={{
          marginRight: 8,
          marginLeft: 8,
          marginVertical: 12,
          borderRadius: 16
        }}
      />
    </View>

  )
}

export const Tab3 = ({ navigation }) => {
  return (
    <ChartContainer>
      <ColumnContainer>
        <HeaderText>Number</HeaderText>
        <RowText>12886039</RowText>
        <RowText>12886022</RowText>
        <RowText>12885978</RowText>
        <RowText>12885944</RowText>
        <RowText>12885867</RowText>
        <RowText>12885822</RowText>
        
      </ColumnContainer>

      <ColumnContainer>
        <HeaderText>Region</HeaderText>
        <RowText>EU</RowText>
        <RowText>US</RowText>
        <RowText>EU</RowText>
        <RowText>AS</RowText>
        <RowText>US</RowText>
        <RowText>SA</RowText>
      </ColumnContainer>

      <ColumnContainer>
        <HeaderText>Reward</HeaderText>
        <RowText>2.2678 <RowTextBlue>ETH</RowTextBlue></RowText>
        <RowText>2.3718 <RowTextBlue>ETH</RowTextBlue></RowText>
        <RowText>2.4241 <RowTextBlue>ETH</RowTextBlue></RowText>
        <RowText>2.4894 <RowTextBlue>ETH</RowTextBlue></RowText>
        <RowText>2.3880 <RowTextBlue>ETH</RowTextBlue></RowText>
        <RowText>2.3855 <RowTextBlue>ETH</RowTextBlue></RowText>
      </ColumnContainer>

      <ColumnContainer>
        <HeaderText>Luck</HeaderText>
        <RowTextGreen>17.48%</RowTextGreen>
        <RowTextGreen>55.83%</RowTextGreen>
        <RowTextGreen>46.63%</RowTextGreen>
        <RowText>109.03%</RowText>
        <RowTextGreen>56.53%</RowTextGreen>
        <RowText>108.94%</RowText>
      </ColumnContainer>
    </ChartContainer>
  );
}