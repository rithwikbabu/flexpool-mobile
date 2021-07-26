import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components';

export const Container = styled(View)`
    flex: 1;
    width: 100%;
    background: ${(props) => props.theme.darkColors.bg.primary};

    flex-direction: row;
    justify-content: space-between;
`;

export const ColumnContainer = styled(View)`
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
    padding-right: 25px;
`;

export const HeaderText = styled(Text)`
    color: ${(props) => props.theme.darkColors.text.secondary};
    font-weight: 700;
    font-size: 15px;
`;

export const RowText = styled(Text)`
    color: ${(props) => props.theme.darkColors.text.primary};
    font-size: 20px;
    font-weight: 500;
    border-bottom-width: 1px;
`;

export const RowTextGreen = styled(RowText)`
    color:${(props) => props.theme.darkColors.ui.success};
`;

export const RowTextBlue = styled(RowText)`
    color:${(props) => props.theme.darkColors.ui.primary};
`;