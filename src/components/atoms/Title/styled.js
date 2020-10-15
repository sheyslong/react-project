import styled from 'styled-components'
import { Typography } from 'antd'
import { colors } from '../../../styles/colors'

const { Title } = Typography;

export const TitleAtom = styled(Title)`
    color: ${({color}) => color ? colors.black : colors.white } !important;
`;