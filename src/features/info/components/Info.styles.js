import React from 'react';
import { SafeAreaView } from 'react-native';
import styled from 'styled-components/native';

export const SafeView = styled(SafeAreaView)`
    background-color: ${(props) => props.theme.darkColors.bg.primary};
    border-bottom-width: 1px;
    border-color: ${(props) => props.theme.darkColors.ui.border};
`;