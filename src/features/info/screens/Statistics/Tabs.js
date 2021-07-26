import React from 'react';
import {
  Wrapper,
  StatBoxContainer,
  StatBox,
  StatTitle,
  Value,
  StatRow,
} from '../../components/Statistics.styles';
import {
  LineChart,
  // BarChart,
  // PieChart,
  // ProgressChart,
  // ContributionGraph,
  // StackedBarChart
} from "react-native-chart-kit";
import { View, Dimensions } from 'react-native';
import { Infoicon } from '../../../../components/Infoicon';

export const Tab1 = ({ navigation }) => {
  return (
    <Wrapper style={{width: Dimensions.get("window").width}}>
        <StatRow>
        <StatBoxContainer>
            <StatBox padding>
            <StatTitle>pool hashrate</StatTitle>
            <Value>7.29 TH/s</Value>
            </StatBox>
        </StatBoxContainer>

        <StatBoxContainer>
            <StatBox padding>
            <StatTitle>average luck  <Infoicon/></StatTitle>
            <Value>99.39%</Value>
            </StatBox>
        </StatBoxContainer>
        </StatRow>

        <StatRow>
        <StatBoxContainer>
            <StatBox padding>
            <StatTitle>miners</StatTitle>
            <Value>15,744</Value>
            </StatBox>
        </StatBoxContainer>

        <StatBoxContainer>
            <StatBox padding>
            <StatTitle>workers</StatTitle>
            <Value>36,887</Value>
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
        height={220}
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

