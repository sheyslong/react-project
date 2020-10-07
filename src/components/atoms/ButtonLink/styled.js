import styled from 'styled-components';
import { colors } from '../../../styles/colors';
import 'antd/dist/antd.css';

import { Button } from 'antd';

export const ButtonAtom = styled(Button)`
    color: ${ colors.pink };
    &:hover {
        color: ${ colors.pink };
    }
    &:focus {
        color: ${ colors.pink } ;      
    }
    &:click {
        color: ${ colors.pink };    
    }
`;
