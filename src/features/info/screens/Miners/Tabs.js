import React from 'react';
import {
  Wrapper,
} from '../../components/Statistics.styles';
import {
//   LineChart,
  // BarChart,
  PieChart,
  // ProgressChart,
  // ContributionGraph,
  // StackedBarChart
} from "react-native-chart-kit";
import { View, Dimensions, StyleSheet  } from 'react-native';
import { ColumnContainer, Container, HeaderText, RowText, RowTextGreen, RowTextBlue } from '../../components/Miners.styles';

export const Tab1 = ({ navigation }) => {
  return (
    <Container>
      <ColumnContainer>
        <HeaderText>Top Miners</HeaderText>
        <RowTextBlue>0x4368…955A7C</RowTextBlue>
        <RowTextBlue>0x28d8…913837</RowTextBlue>
        <RowTextBlue>0xe054…a394a4</RowTextBlue>
        <RowTextBlue>0x32e4…BCfD2D</RowTextBlue>
        <RowTextBlue>0xBab7…64d4Eb</RowTextBlue>
        <RowTextBlue>0x95Ad…3F6BB1</RowTextBlue>
      </ColumnContainer>

      <ColumnContainer>
        <HeaderText>Hashrate</HeaderText>
        <RowText>626.3 GH/s </RowText>
        <RowText>459.1 GH/s</RowText>
        <RowText>214.9 GH/s</RowText>
        <RowText>85.9 GH/s</RowText>
        <RowText>70.3 GH/s</RowText>
        <RowText>63 GH/s</RowText>
      </ColumnContainer>

      <ColumnContainer>
        <HeaderText>Balance</HeaderText>
        <RowText>18.254 <RowTextBlue>ETH</RowTextBlue></RowText>
        <RowText>1.3112 <RowTextBlue>ETH</RowTextBlue></RowText>
        <RowText>1.9603 <RowTextBlue>ETH</RowTextBlue></RowText>
        <RowText>3.1625 <RowTextBlue>ETH</RowTextBlue></RowText>
        <RowText>1.3941 <RowTextBlue>ETH</RowTextBlue></RowText>
        <RowText>0.1718 <RowTextBlue>ETH</RowTextBlue></RowText>
      </ColumnContainer>
    </Container>
  );
}

export const Tab2 = ({ navigation }) => {

    const data = [
        {
          name: " | 100 MH/s",
          population: 36.7,
          color: "#0069ff",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        {
          name: " | 100 GH/s",
          population: 25.8,
          color: "#005ee5",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        {
          name: " | 1 GH/s",
          population: 23.7,
          color: "#0054cc",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        {
          name: " | 10 GH/s",
          population: 9.6,
          color: "#0049b2",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        {
          name: " | 10 MH/s",
          population: 4.2,
          color: "#003f99",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        }
      ];

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
    <View>
        <PieChart
        data={data}
        width={Dimensions.get("window").width}
        height={220}
        chartConfig={chartConfig}
        accessor={"population"}
        backgroundColor={"transparent"}
        paddingLeft={"15"}
        center={[10, 10]}
        absolute
        />
    </View>

  )
}