import React from 'react'
import { Text, ButtonLink } from '../../atoms'
import { Avatar } from 'antd'
import { UserOutlined, CloseOutlined } from '@ant-design/icons'
import { 
    ModalMolecule, 
    TitleComponent, 
    Header, 
    DataHeader, 
    Legend} from './styled'

export const ModalDetails = ({projectName, job, description, color, labName, visible, onOk, onCancel, ...props}) => {
  return <>
        <ModalMolecule
            visible={ visible }
            closable={false}
            footer={null}
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
                <ButtonLink onClick={ onCancel } ><CloseOutlined /></ButtonLink>
                <ButtonLink onClick={ onOk }>Ver</ButtonLink>
            </Legend>
        </ModalMolecule>
  </>;
};

export default ModalDetails;
