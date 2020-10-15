import styled from 'styled-components'
import { Avatar } from 'antd'

export const LogoComponent = styled(Avatar)`
    background: none;
    font-size: ${({size}) => size ? (size-5) : 54}px !important;
`;
