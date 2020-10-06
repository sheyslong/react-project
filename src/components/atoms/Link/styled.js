import styled from 'styled-components';
import { colors } from '../../../styles/colors';
import { Typography } from 'antd';

const { Link } = Typography;

export const LinkAtom = styled(Link)`
    color: ${ colors.pink } !important;
`;