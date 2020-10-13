import React from 'react'
import { 
    CardMolecule,
    TitleComponent, 
    Description, 
    LabNameComponent, 
    Header, 
    DataHeader, 
    Legend, 
    LogoComponent } from './styled'
import Icon from '@ant-design/icons'
import {ReactComponent as Logo} from '../../../styles/images/logo/Logo.svg'

export const CardSelection = ({projectName, job, description, colors, labName, onClick, ...props}) => {
    return <div>
        <CardMolecule
            hoverable
            primary={ colors.primary }
            secundary={ colors.secundary }
            onClick={ onClick }
            {...props}
        >
            <Header>
                <LogoComponent 
                    size={64} 
                    icon={
                        <Icon component={Logo} style={{ color: colors.icon }}/>
                    } />
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
        </CardMolecule>
  </div>;
};

export default CardSelection;
