import React from 'react'
import { Text, Button } from '../../atoms'
import Icon, { CloseOutlined } from '@ant-design/icons'
import { 
    ModalMolecule, 
    TitleComponent, 
    Header, 
    LogoComponent,
    DataHeader, 
    Legend} from './styled'
import {ReactComponent as Logo} from '../../../styles/images/logo/Logo.svg'

export const Details = ({projectName, job, description, colors, labName, visible, onOk, onCancel, ...props}) => {
  return <>
        <ModalMolecule
            visible={ visible }
            footer={null}
            primary={ colors.primary }
            secundary={ colors.secundary }
            onCancel={ onCancel }
            title={
            <Header
                primary={ colors.primary }
                secundary={ colors.secundary }
            >
                <LogoComponent 
                    size={64} 
                    icon={
                        <Icon component={Logo} style={{ color: colors.icon }}/>
                    } 
                />                
                <DataHeader>
                    <TitleComponent level={2}>{ projectName }</TitleComponent>
                    <TitleComponent level={5}>{ labName }</TitleComponent>
                </DataHeader>
            </Header>
            }
            {...props}
        >
            
            <TitleComponent level={5}>{ job }</TitleComponent>
            <Text>{ description }</Text>
            <Legend>
                <Button onClick={ onOk }>Ver Detalhes</Button>
            </Legend>
        </ModalMolecule>
  </>;
};

export default Details;
