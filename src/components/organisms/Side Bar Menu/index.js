import React from 'react'
import { HeaderMin } from '../../molecules'
import { SideBar, MenuComponent } from './styled'
import { UserOutlined, SettingOutlined, QuestionOutlined } from '@ant-design/icons'

export const SideBarMenu = ({ visible, onClose, name, email, image}) => {
    return <SideBar
            width={700}
            placement="right"
            closable={false}
            visible={visible}
            onClose={onClose}
        >
            <HeaderMin 
                name={name} 
                email={email} 
                image={image} 
            />
            <MenuComponent mode="vertical">
                    <MenuComponent.Item icon={ <UserOutlined/> }>
                        Conta
                    </MenuComponent.Item>
                    <MenuComponent.Item icon={ <SettingOutlined /> }>
                        Configurações
                    </MenuComponent.Item>
                    <MenuComponent.Item icon={ <QuestionOutlined /> }>
                        Ajuda
                    </MenuComponent.Item>
                </MenuComponent>
        </SideBar>
    ;
};

export default SideBarMenu;