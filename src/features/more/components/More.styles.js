import React, {useState} from 'react';
import styled from "styled-components";
import { View, Text, Switch } from "react-native";

export const Container = styled(View)`
  background: ${(props) => props.theme.darkColors.bg.primary};
  width: 100%;
  flex: 1;
  align-items: center;
  justify-content: flex-start;
`;

export const SectionContainer = styled(View)`
  width: 90%;
  margin-bottom: 30px;
`;

const ItemContainer = styled(View)`
  background: ${(props) => props.theme.darkColors.bg.secondary};
  border-color: ${(props) => props.theme.darkColors.ui.border};
  border-width: 1px;
  border-radius: 15px;
  margin-top: 10px;
  justify-content: space-between;
  flex-direction: row;
  padding: 10px;
  align-items: center;
`;

const CText = styled(Text)`
  color: ${(props) => props.theme.darkColors.text.secondary};
`;

export const SectionTitle = styled(CText)`
  font-size: 20px;
  font-weight: 600;
`; 

const SubTitle = styled(CText)`
  font-size: 25px;
  font-weight: 500;
`;

const TempPicker = styled(View)`
  background-color: ${(props) => props.theme.darkColors.bg.tertiary};
  padding: 5px;
  border-radius: 10px;
  border-width: 2px;
  border-color: ${(props) => props.theme.darkColors.ui.border};
`;

const PickerText = styled(CText)`
  font-size: 22.5px;
  font-weight: 700;
`;

export const BottomContainer = styled(View)`
  justify-content: flex-start;
  flex-direction: row;
  width: 100%;
`;

export const SwitchContainer = ({ title, imagesrc }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <ItemContainer>
      <SubTitle>{title}</SubTitle>
      <Switch
        trackColor={{ false: "#767577", true: "#0069FF" }}
        thumbColor={isEnabled ? "#FFF" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </ItemContainer>
  );
};

export const SubContainer = ({ title, temp }) => {
  return (
    <ItemContainer>
      <SubTitle>{title}</SubTitle>
      <TempPicker><PickerText>{temp}</PickerText></TempPicker>
    </ItemContainer>
  );
};

export const LinkContainer = ({ title }) => {
  
  return (
    <View>
      <SubTitle style={{color:"#0069FF"}}>{title}</SubTitle>
    </View>
  );
};