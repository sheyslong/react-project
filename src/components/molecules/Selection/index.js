import React from 'react'
import { 
    CardMolecule,
    TitleComponent, 
    Description, 
    LabNameComponent, 
    Header, 
    DataHeader, 
    Legend } from './styled'
import { Avatar } from '../../atoms'

export const Selection = ({projectName, job, description, colors, labName, onClick, ...props}) => {
    return <CardMolecule
            hoverable
            primary={ colors.primary }
            secundary={ colors.secundary }
            onClick={ onClick }
            {...props}
        >
            <Header>
                <Avatar colors={ colors }/>
                <DataHeader>
                    <TitleComponent 
                        level={3}>{ projectName }
                    </TitleComponent>
                    <TitleComponent 
                        level={5}>{ job }
                    </TitleComponent>
                </DataHeader>            
            </Header>
            <Description 
                ellipsis={{ rows: 1, expandable: true, symbol: ' ' }}> 
                { description }
            </Description>
            <Legend>
                <LabNameComponent>{ labName }</LabNameComponent> 
            </Legend>
        </CardMolecule>;
};

export default Selection;
