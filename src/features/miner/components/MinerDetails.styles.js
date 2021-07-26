import React, { useState } from 'react';
import styled from 'styled-components';
import { View, Image, Text, Switch } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Container = styled(View)`
    flex: 1;
    background-color: ${(props) => props.theme.darkColors.bg.primary};
    align-items: center;
    justify-content: flex-start;
    width: 100%;
`;

const HeaderContainer = styled(View)`
  background-color: ${(props) => props.theme.darkColors.bg.primary};
  align-items: center;
  justify-content: center;
  min-height: 45px;
  min-width: 75%;
  borderRadius: 7.5px;
  padding-right: 1px;
  flex-direction: row;
  border-bottom-width: 1px;
  border-color: ${(props) => props.theme.darkColors.ui.border};
`;

const CoinIcon = styled(Image)`
  width: 20px;
  height: 20px;
`;

const MinerAddress = styled(Text)`
  font-size: 20px;
  color: ${(props) => props.theme.darkColors.text.secondary};
  font-weight: 400;
  padding-left: 10px;
`;

const icons = {
    eth: require('../../../../assets/crypto/eth.png'),
    xch: require('../../../../assets/crypto/xch.png'),
  };

const SubTitle = styled(Text)`
  color: #FFF;
  font-size: 25px;
  font-weight: 700;
`;

const Favorite = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
            <TouchableOpacity onPress={toggleSwitch}>
                <Ionicons name="star" size="30" color={isEnabled ? "#ccc" : "#0069FF"}/>
            </TouchableOpacity>
    );
};

const SettingsBox = styled(View)`
    background-color: #0069FF;
    border-radius: 10px;
    padding: 5px;
    padding-left: 10px;
    padding-right: 10px;
    flex-direction: row;
    margin: 5px;
    margin-right: 25px;
    margin-left: 25px;
`;

export const Header = ({ address, crypto, joined, navigation }) => {
    const src = icons[crypto];

    return (
        <>
        <HeaderContainer>
            <CoinIcon source={src}/>
            <MinerAddress>{address}</MinerAddress>
        </HeaderContainer>
        <ToggleContainer>
            <TouchableOpacity>
                <Ionicons name="clipboard-outline" size="30" color="#ccc"/>
            </TouchableOpacity>
            <TouchableOpacity>
                <SettingsBox>
                    <Ionicons name="settings-outline" size="24" color="#fff"/>
                    <SubTitle style={{paddingLeft:"2%"}}>
                        Settings
                    </SubTitle>
                </SettingsBox>
            </TouchableOpacity>
            <Favorite/>
        </ToggleContainer>
        <BlockContainer>
            <ItemContainer>
                <StyledText>Payout Limit:{"\n"}2 <StyledText style={{color:"#0069ff"}}>ETH</StyledText></StyledText>
            </ItemContainer>
            <ItemContainer>
                <StyledText>Joined:{"\n"}{joined} months ago</StyledText>
            </ItemContainer>
        </BlockContainer>
        <BlockContainer>
            <ItemContainer>
                <StyledText>Gas Price Limit:{"\n"}100 Gwei</StyledText>
            </ItemContainer>
            <ItemContainer>
                <StyledText>Ethereum Price:{"\n"}$2,162.73</StyledText>
            </ItemContainer>
        </BlockContainer>
        </>
    );
  };

const ToggleContainer = styled(View)`
  justify-content: space-between;
  flex-direction: row;
  padding: 10px;
  align-items: center;
`;

export const ItemContainer = styled(View)`
  background-color: ${(props) => props.theme.darkColors.bg.primary};
  border-color: ${(props) => props.theme.darkColors.ui.border};
  border-width: 1px;
  border-radius: 10px;
  flex-direction: row;
  margin: 5px;
  padding: 10px;
  width: 40%;
`;

export const BlockContainer = styled(View)`
  flex-direction: row;
`;

export const StyledText = styled(Text)`
  color: ${(props) => props.theme.darkColors.text.primary};
  font-size: 22.5px;
  font-weight: 600;
  flex:1;
  flexWrap: wrap;
`;