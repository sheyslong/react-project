import React from 'react'
import { CardMolecule } from './styled'
import { Text, ButtonLink } from '../../atoms'
import { Avatar } from 'antd'
import { UserOutlined, CloseOutlined } from '@ant-design/icons'
import { TitleComponent, Header, DataHeader, Legend } from './styled'

export const CardDetails = ({projectName, job, description, color, labName, ...props}) => {
  return <>
        <CardMolecule
            hoverable
            {...props}
        >
            <Header>
                <Avatar size={64} icon={<UserOutlined />} />
                <DataHeader>
                    <TitleComponent level={2}>{ projectName }</TitleComponent>
                    <TitleComponent level={5}>{ labName }</TitleComponent>
                </DataHeader>            
            </Header>
            <TitleComponent level={5}>{ job }</TitleComponent>
            <Text>{ description }</Text>
            <Legend>
                <ButtonLink><CloseOutlined /></ButtonLink>
                <ButtonLink>Ver</ButtonLink>
            </Legend>
        </CardMolecule>
  </>;
};

export default CardDetails;
