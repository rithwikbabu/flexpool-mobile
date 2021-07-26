import { View, Text, ScrollView } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(View)`
    flex: 1;
    background-color: ${(props) => props.theme.darkColors.bg.primary};
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
`;

export const HeaderContainer = styled(Container)`
    border-bottom-width: 1px;
    border-top-width: 1px;
    border-color: ${(props) => props.theme.darkColors.ui.border};
    max-height: 80px;
    min-height: 80px;
    width: 100%;
    padding: 15px;
    padding-top: 17px;
    flex-direction: row;
    justify-content: space-between;
`;

export const Wrapper = styled(Container)`
    border-color: ${(props) => props.theme.darkColors.ui.border};
    width: 100%;
`;

export const Title = styled(Text)`
    color: ${(props) => props.theme.darkColors.text.primary};
    font-size: 40px;
    font-weight: bold;
`;

export const SlideContainer = styled(View)`
    max-width: 100%;
    min-width: 100%;
`

export const StatsView = styled(ScrollView)`
    min-width: 100%;
`;