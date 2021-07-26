import React from 'react';
import { View, Image, TextInput, Text } from 'react-native';
import styled from 'styled-components';


export const InputArea = styled(TextInput)`
    padding: ${(props) => props.theme.space[3]};
    background-color: ${(props) => props.theme.darkColors.bg.secondary};
    height: 50px;
    width: 75%;
    min-width: 200px;
    font-size: 18px;
    color: ${(props) => props.theme.darkColors.text.secondary};
    margin-bottom: 10px;
`;

export const Container = styled(View)`
    flex: 1;
    background-color: ${(props) => props.theme.darkColors.bg.primary};
    align-items: center;
    justify-content: flex-start;
    width: 100%;
`;

export const Logo = styled(Image)`
    resize-mode: center;
`;

export const Card = styled(View)`
    flex: 1;
    background-color: ${(props) => props.theme.darkColors.ui.success};
    align-items: center;
    justify-content: flex-start;
    width: 75%;
    max-height: 150px;
    margin-top: 20px;
`;

export const CustomText = styled(Text)`
    color: ${(props) => props.theme.darkColors.text.primary};
    font-size: 15px;
    font-weight: 500;
`;

export const Title = styled(CustomText)`
    font-size: 22.5px;
    font-weight: 600;
`;

const bgColor = {
    Ethereum: "rgba(0, 105, 255, .75)",
    Chia: "rgba(21, 205, 114, .75)",
}

const earningsText = {
    Ethereum: "MH/s",
    Chia: "TB",
}

const poolFee = {
    Ethereum: "0.5% Pool Fee",
    Chia: "0% Pool Fee",
}

const abbreviations = {
    Ethereum: "ETH",
    Chia: "XCH",
}

const icons = {
    Ethereum: require('../../../../assets/crypto/eth.png'),
    Chia: require('../../../../assets/crypto/xch.png'),
  };

const CoinIcon = styled(Image)`
  width: 35px;
  height: 35px;
  margin-right: -30px;
`;

export const InfoCard = ({crypto, dayearnings_m, monthearnings_m, dayearnings_c, monthearnings_c,}) => {
    const bgc = bgColor[crypto];
    const et = earningsText[crypto];
    const pf = poolFee[crypto];
    const abrev = abbreviations[crypto];
    const src = icons[crypto];

    return (
        <Card style={{backgroundColor: bgc, borderRadius: 15, borderWidth: 1, borderColor: '#333'}}>
            <View style={{justifyContent:'space-between', flexDirection:'row', width:'90%', marginTop: '2.5%'}}>
                <View>
                    <CoinIcon source={src}/>
                </View>
                <View>
                    <Title>{crypto}</Title> 
                    <CustomText>Estimated earnings</CustomText> 
                </View>
                <View>
                    <CustomText>{pf}</CustomText>
                </View>
            </View>
            <View style={{justifyContent:'space-evenly', flexDirection:'row', width:'90%', marginTop: '5%'}}>
                <View>
                    <CustomText>100 {et} daily</CustomText>
                    <Title style={{fontSize: 30}}>${dayearnings_m}</Title>
                    <CustomText>{dayearnings_c} {abrev}</CustomText>
                </View>
                <View>
                    <CustomText>100 {et} monthly</CustomText>
                    <Title style={{fontSize: 30}}>${monthearnings_m}</Title>
                    <CustomText>{monthearnings_c} {abrev}</CustomText>
                </View>
            </View>    
        </Card>
    )
};

export const MinerList = styled(View)`
    border-radius: 25px;
    width: 75%;
`;