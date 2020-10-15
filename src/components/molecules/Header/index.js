import React from 'react'
import { Avatar } from 'antd'
import { UserOutlined, SettingOutlined } from '@ant-design/icons'
import { ButtonLink } from '../../atoms'
import { HeaderProfile, User, Config, Skills, Skill, TitleComponent } from './styled'
import { colors } from '../../../styles/colors'

export const Header = ({ name, email, image, soft, hard, language, ...props }) => {
  return <HeaderProfile>
      <Config>
          <ButtonLink color={ colors.white } onClick={ () => alert("CONFIG") }><SettingOutlined/></ButtonLink>
      </Config>
      <User>
        <Avatar src={image} size={150} icon={ <UserOutlined /> }/>
        <TitleComponent level={2}> { name } </TitleComponent>
        <TitleComponent level={5}> { email } </TitleComponent>
      </User>
      <Skills>
        <Skill>
            <TitleComponent level={4}> Soft Skills </TitleComponent>
            <TitleComponent level={2}>{ soft }</TitleComponent>
        </Skill>
        <Skill>
            <TitleComponent level={4}> Hard Skills </TitleComponent>
            <TitleComponent level={1}>{ hard }</TitleComponent>
        </Skill>
        <Skill>
            <TitleComponent level={4}> Idiomas </TitleComponent>
            <TitleComponent level={2}>{ language }</TitleComponent>
        </Skill>
      </Skills>
  </HeaderProfile>;
}

export default Header;