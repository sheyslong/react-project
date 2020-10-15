import React from 'react'
import { Text, Button, Avatar } from '../../atoms'
import { 
    ModalMolecule, 
    TitleComponent, 
    Job,
    Header, 
    DataHeader, 
    Legend} from './styled'

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
                <Avatar colors={ colors }/>            
                <DataHeader>
                    <TitleComponent level={2}>{ projectName }</TitleComponent>
                    <TitleComponent level={5}>{ labName }</TitleComponent>
                </DataHeader>
            </Header>
            }
            {...props}
        >
            <Job color level={4}>{ job }</Job>
            <Text>{ description }</Text>
            <Legend>
                <Button color={ colors.icon } onClick={ onOk }>Ver Detalhes</Button>
            </Legend>
        </ModalMolecule>
  </>;
};

export default Details;
