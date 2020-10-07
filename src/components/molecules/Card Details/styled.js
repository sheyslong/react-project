import styled from 'styled-components';
import 'antd/dist/antd.css';
import { Title } from '../../atoms'
import { Card } from 'antd';

export const CardMolecule = styled(Card)`
    width: 300;
    margin-top: 16;
`;

export const TitleComponent = styled(Title)`
    margin-block-start: 0 !important;
    margin-block-end: 0 !important;
    margin-inline-start: 16px !important;
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
    flex-direction: row;
`;