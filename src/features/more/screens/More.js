import React, {useState} from 'react';
import { SafeAreaView, View, Switch } from 'react-native';
import { Spacer } from '../../../components/Spacer/Spacer';
import { 
  Container, 
  SectionContainer, 
  SectionTitle, 
  SubContainer, 
  LinkContainer, 
  BottomContainer, 
  SwitchContainer} from '../components/More.styles';

export default More = ({ navigation }) => {
      return (
        <Container>
          <SafeAreaView/>
          <Spacer size="xl"/>
          <Container>
            <SectionContainer>
              <SectionTitle>Preferences</SectionTitle>
              <SwitchContainer title="Notifications"/>
              <SubContainer title="Currency" temp="USD"/>
              <SubContainer title="Language" temp="EN (US)"/>
              <SwitchContainer title="Dark Mode"/>
            </SectionContainer>

            <BottomContainer style={{marginRight:"-10%"}}>
              <View style={{paddingRight:"25%"}}>         
                <SectionTitle>Community</SectionTitle>
                <LinkContainer title="Discord"/>
                <LinkContainer title="Reddit"/>
                <LinkContainer title="Telegram"/>
                <LinkContainer title="Flexpool.io"/>
              </View>
              <View>
                <SectionTitle>Help</SectionTitle>
                <LinkContainer title="FAQ"/>
                <LinkContainer title="Support"/>
              </View>
            </BottomContainer>
            
            
            
          </Container>
          
        </Container>
      );
}