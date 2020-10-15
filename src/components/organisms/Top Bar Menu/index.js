import React from 'react'
import { colors } from '../../../styles/colors'
import { Avatar, ButtonLink } from '../../atoms'
import { TopBar, MenuComponent, MenuBar, Profile } from './styled'
import { UserOutlined } from '@ant-design/icons'

export const TopBarMenu = ({ image }) => {
    const color = {
        icon: colors.pink
    }
    return <>
        <TopBar>
            <MenuBar>
                <Avatar size={54} colors={ color }/>            
                <MenuComponent mode="horizontal">
                    <MenuComponent.Item >
                        Seleções
                    </MenuComponent.Item>
                    <MenuComponent.Item >
                        Minhas Seleções
                    </MenuComponent.Item>
                </MenuComponent>
            </MenuBar>
            <ButtonLink onClick={() => alert("PROFILE") }>
                <Profile src={ image } size={44} icon={<UserOutlined />}/>                   
            </ButtonLink>
        </TopBar>
    </>
    ;
};

export default TopBarMenu;