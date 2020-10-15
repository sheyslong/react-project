import styled from 'styled-components';
import { colors } from '../../../styles/colors';
import { Input } from 'antd';


export const InputAtom = styled(Input)`
    border-radius: 0px;
    outline: none;
    outline-style: none;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: solid ${ colors.gray } 1px;
    padding: 3px 10px;
    &:focus, &:focus{
    outline: none !important;
    }
    &:focus, &:active {
      box-shadow: none;
      border-bottom: solid ${ colors.gray } 1px;
    }
`;