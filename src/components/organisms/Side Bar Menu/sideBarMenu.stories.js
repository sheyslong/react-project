import React, { useState } from 'react';
import { Button } from '../../atoms';
import SideBarMenu from './index';

export default {
  title: 'SideBarMenu Organisms Component',
  component: SideBarMenu,
};

const image = "https://scontent.fjdo10-2.fna.fbcdn.net/v/t1.0-9/107065226_3160359924018706_6230635106728147226_n.jpg?_nc_cat=111&_nc_sid=09cbfe&_nc_ohc=s2dirxK1HDgAX_4KAdA&_nc_ht=scontent.fjdo10-2.fna&oh=82c1a4b907bdd6c641671bab8ffb106e&oe=5FABD24E"

const SideBar = () => {
    const [open, setOpen] = useState(false)
    return <>
      <Button onClick={() => setOpen(true)}>Open Side Bar</Button>
      <SideBarMenu 
          visible={ open }
          onClose={() => setOpen(false)}
          name={"Sheilla da Silva"} 
          email={"sheilla.silva@teste.com"} 
          image={ image } 
      />
    </>

};
export const ToStorybookSideBarMenu = () => <SideBar/>

ToStorybookSideBarMenu.story = {
  name: 'SideBarMenu',
};