import React from 'react'
import { CardMolecule } from './styled'
import { Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { TitleComponent, TextComponent, LabelComponent, Header, DataHeader, Legend } from './styled'

export const CardSelection = ({title, job, description, color="#522546", labName, ...props}) => {
  return <>
        <CardMolecule
            hoverable
            color={color}
            {...props}
        >
            <Header>
                <Avatar size={64} icon={<UserOutlined />} />
                <DataHeader>
                    <TitleComponent level={3}>{ title }</TitleComponent>
                    <TitleComponent level={5}>{ job }</TitleComponent>
                </DataHeader>            
            </Header>
            <TextComponent ellipsis={{ rows: 1, expandable: true, symbol: ' ' }}> { description }</TextComponent>
            <Legend>
                <LabelComponent>{ labName }</LabelComponent> 
            </Legend>
        </CardMolecule>
  </>;
};

export default CardSelection;
