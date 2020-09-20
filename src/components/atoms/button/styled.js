import styled from 'styled-components';
import { colors } from '../../../styles/colors';
import 'antd/dist/antd.css';

import { Button } from 'antd';

export const ButtonAtom = styled(Button)`
    background-color: ${ colors.pink };
    color: ${ colors.white };
    border-color: ${ colors.pink };
    cursor: pointer;
    border-radius: 40px 40px 40px 40px;
    &:hover {
        background-color: ${ colors.pink };    
        opacity: 0.8;
        color: ${ colors.white };
    }
    &:focus {
        background-color: ${ colors.pink };    
        opacity: 0.8;
        border-color: ${ colors.pink };
        color: ${ colors.white } ;      
    }
    &:click {
        color: ${ colors.pink };    
    }
`;
