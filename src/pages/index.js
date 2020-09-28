import React from 'react';
import { Button, Input, Label, Link, Title, Text } from '../components/atoms'

function Pages() {
  return (
    <div 
      style={{
        position: 'absolute', 
        left: '50%', 
        top: '50%',
        transform: 'translate(-50%, -50%)'
      }}
    >
      <Button>Primary</Button>
      <div>.</div>
      <Input placeholder='Input'/>
      <div>.</div>
      <Label 
        text='Label aqui'
        type='warning'
      />
      <div>.</div>
      <Link 
        text='Texto link'
        url='#'
        target='_blank'
      />
      <div>.</div>
      <Title 
        text='Title aqui'
        level={3}
      />
      <div>.</div>
      <Text 
        ellipsis={{ rows: 2, expandable: true, symbol: 'more' }}
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      />
    </div>
  )
}

export default Pages;

  