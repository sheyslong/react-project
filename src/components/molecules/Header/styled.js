import styled from 'styled-components'
import { Title } from '../../atoms'

import { colors } from '../../../styles/colors'

export const HeaderProfile = styled.div`
    display: flex;
    flex-direction: column;    
    justify-content: center;
    background-image: linear-gradient(240deg, ${ colors.pink }, ${ colors.darkViolet });
`;

export const Config = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 1%;
`;

export const User = styled.div`
    display: flex;
    flex-direction: column;    
    align-items: center;
    margin-block-end: 10%;
`;

export const TitleComponent = styled(Title)`
    margin-block-start: 0 !important;
    margin-block-end: 0 !important;
`;

export const Skills = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-block-end: 5%;
`;

export const Skill = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
