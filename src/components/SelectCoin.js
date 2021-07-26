import React from 'react';
import styled from 'styled-components';
import { Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Menu = styled(View)`
  background-color: ${(props) => props.theme.darkColors.bg.secondary};
  align-items: center;
  justify-content: center;
  min-height: 45px;
  min-width: 25%;
  borderRadius: 7.5px;
  padding-right: 1px;
  flex-direction: row;
`;

const CoinIcon = styled(Image)`
  width: 20px;
  height: 20px;
`;

const CoinName = styled(Text)`
  font-size: 25px;
  color: ${(props) => props.theme.darkColors.text.secondary};
  font-weight: 600;
  padding-left: 10px;
`;

const icons = {
  ETH: require('./../../assets/crypto/eth.png'),
  XCH: require('./../../assets/crypto/xch.png'),
};

export const SelectCoin = ({ crypto }) => {
  const src = icons[crypto];
  return (
    <TouchableOpacity>
      <Menu>
        <CoinIcon source={src}/>
        <CoinName>{crypto}</CoinName>
      </Menu>
    </TouchableOpacity>
  );
};