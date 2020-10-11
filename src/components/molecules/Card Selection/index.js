import React, { useState } from 'react'
import { 
    CardMolecule,
    TitleComponent, 
    TextComponent, 
    LabNameComponent, 
    Header, 
    DataHeader, 
    Legend, 
    LogoComponent } from './styled'
import Icon from '@ant-design/icons'
import { CardDetails } from '../../molecules'
import {ReactComponent as Logo} from '../../../styles/images/logo/Logo.svg'

export const CardSelection = ({title, job, description, colors, labName, ...props}) => {
    const [open, setOpen] = useState(false)
    return <div>
        { open ?
           <CardDetails /> :
            <CardMolecule
                hoverable
                primary={ colors.primary }
                secundary={ colors.secundary }
                {...props}
                onClick={() => setOpen(true)}
            >
                <Header>
                    <LogoComponent 
                        size={64} 
                        icon={
                            <Icon component={Logo} style={{ color: colors.icon }}/>
                        } />
                    <DataHeader>
                        <TitleComponent 
                            level={3}>{ title }
                        </TitleComponent>
                        <TitleComponent 
                            level={5}>{ job }
                        </TitleComponent>
                    </DataHeader>            
                </Header>
                <TextComponent 
                    ellipsis={{ rows: 1, expandable: true, symbol: ' ' }}> 
                    { description }
                </TextComponent>
                <Legend>
                    <LabNameComponent>{ labName }</LabNameComponent> 
                </Legend>
            </CardMolecule>
        }
    </div>;
};

export default CardSelection;
