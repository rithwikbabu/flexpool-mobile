import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, } from 'react-native';
import React from 'react';
import {
  Container,
  Logo,
  InputArea,
  InfoCard,
  MinerList,
} from '../components/MinerHome.styles';
import { Spacer } from '../../../components/Spacer/Spacer';
import { MinerListItem } from '../components/MinerListItem';

export const MinerHome = ({ navigation }) => {

      const logoSrc = require('../../../../assets/images/darklogo.png');
    
      const [text, onChangeText] = React.useState('');
      var num = 0;
    

      const checkInput = () => {
        if (text.length > 10) {
          navigation.navigate('Details');
        } 
      }

      return (
        <Container style={{paddingBottom:"10%"}}>
          <SafeAreaView/>
    
          <Container>
            <Spacer size="xxl"/>
            <Spacer size="xxl"/>
            <Logo source={logoSrc} />
            <InputArea 
              placeholder="Search by your mining address"
              clearTextOnFocus
              returnKeyType="search"
              onSubmitEditing={ () => checkInput() }
              onChangeText={onChangeText}
              placeholderTextColor= "#aaa"
              value={text}
            />
            <MinerList>
              <MinerListItem address='0xBab721E0B7720548CB0E...' crypto='eth'/>
              <MinerListItem address='xch1l8ywj83mfq0uyla4ur4vu...' crypto='xch'/>
            </MinerList>
          </Container>
          
    
          <InfoCard 
            crypto="Ethereum" 
            dayearnings_m="6.50" 
            monthearnings_m="198.15" 
            dayearnings_c="0.002995" 
            monthearnings_c="0.091343"
          />
          <InfoCard 
            crypto="Chia" 
            dayearnings_m="4.02" 
            monthearnings_m="112.68" 
            dayearnings_c="0.021697" 
            monthearnings_c="0.661762"
          />
    
          <StatusBar barStyle="auto" />
        </Container>
      );
}