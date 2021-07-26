import React, { Children } from 'react';
import styled from 'styled-components';
import { Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CoinIcon = styled(Image)`
  width: 20px;
  height: 20px;
`;

const Container = styled(View)`
  background-color: ${(props) => props.theme.darkColors.bg.secondary};
  align-items: center;
  justify-content: center;
  min-height: 45px;
  min-width: 75%;
  borderRadius: 7.5px;
  padding-right: 1px;
  flex-direction: row;
  border-bottom-width: 1px;
  border-color: ${(props) => props.theme.darkColors.bg.primary};
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

export const MinerListItem = ({ address, crypto }) => {
  const src = icons[crypto];
  return (
    <TouchableOpacity>
      <Container>
        <CoinIcon source={src}/>
        <MinerAddress>{address}</MinerAddress>
        <TouchableOpacity>
            <CoinIcon source={require('../../../../assets/icons/closex.png')}/>
        </TouchableOpacity>
      </Container>
    </TouchableOpacity>
  );
};