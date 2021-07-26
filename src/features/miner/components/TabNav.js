import React, { useState } from 'react';
import styled from "styled-components";
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const TabContainer = styled(View)`
    flex-direction: row;
    border-bottom-width: 1px;
    width: 80%;
    justify-content: center;
`;

const Tab = styled(View)`
    border-bottom-width: 2px;
    border-color: ${(props) => props.theme.darkColors.ui.border};
    width: 100%;
    padding: 15px;
`;

const TabText = styled(Text)`
    color: ${(props) => props.theme.darkColors.text.primary};
    font-size: 20px;
    font-weight: 800;
`;

export const TabNav = () => {
    const [c1, c1t] = useState(false);
    const [c2, c2t] = useState(false);
    const [c3, c3t] = useState(false);
    const [c4, c4t] = useState(false);
    const tc1 = () => c1t(previousState => !previousState);
    const tc2 = () => c2t(previousState => !previousState);
    const tc3 = () => c3t(previousState => !previousState);
    const tc4 = () => c4t(previousState => !previousState);
    const fixToggle = () => {
        if (c1 === false) {
            tc1();
        }
        if (c2 === true) {
            tc2();
        }
        if (c3 === true) {
            tc3();
        } 
        if (c4 === true) {
            tc4();
        }
    }

    const ttc1 = () => {fixToggle(); tc1(); }
    const ttc2 = () => {fixToggle(); tc2();}
    const ttc3 = () => {fixToggle(); tc3();}
    const ttc4 = () => {fixToggle(); tc4();}
    
    return (
        <>
        <TabContainer>
            <TouchableOpacity onPress={ttc1}>
                <Tab style={{borderColor:c1 ? "#333" : "#0069FF"}}>
                    <TabText style={{color:c1 ? "#eee" : "#0069FF"}}>Stats</TabText>
                </Tab>
            </TouchableOpacity>
            <TouchableOpacity onPress={ttc2}>
                <Tab style={{borderColor:c2 ? "#0069FF" : "#333"}}>
                    <TabText style={{color:c2 ? "#0069FF" : "#eee"}}>Payments</TabText>
                </Tab>
            </TouchableOpacity>
            <TouchableOpacity onPress={ttc3}>
                <Tab style={{borderColor:c3 ? "#0069FF" : "#333"}}>
                    <TabText style={{color:c3 ? "#0069FF" : "#eee"}}>Rewards</TabText>
                </Tab>
            </TouchableOpacity>
            <TouchableOpacity onPress={ttc4}>
                <Tab style={{borderColor:c4 ? "#0069FF" : "#333"}}>
                    <TabText style={{color:c4 ? "#0069FF" : "#eee"}}>Blocks</TabText>
                </Tab>
            </TouchableOpacity>
        </TabContainer>
        
        </>
    );
  };