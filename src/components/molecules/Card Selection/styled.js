import styled from 'styled-components';
import 'antd/dist/antd.css';
import { colors } from '../../../styles/colors';
import { Title, Text, Label } from '../../atoms'
import { Card } from 'antd';

export const CardMolecule = styled(Card)`
    width: 300;
    margin-top: 16;
    background-color: ${ ({ color }) => color };
`;

export const TitleComponent = styled(Title)`
    color: ${ colors.white } !important;
    margin-block-start: 0 !important;
    margin-block-end: 0 !important;
    margin-inline-start: 16px !important;
`;

export const TextComponent = styled(Text)`
    color: ${ colors.white } !important;
`;

export const LabelComponent = styled(Label)`
    color: ${ colors.gray } !important;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 10%;
`;

export const DataHeader = styled.div`
    display: flex;
    flex-direction: column;
    margin: 16;
`;

export const Legend = styled.div`
    display: flex;
    flex-direction: row-reverse;
`;