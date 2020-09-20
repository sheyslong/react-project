import React from 'react';
import { Button, Input, Label, Link } from '../components/atoms'

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
      <Input />
      <div>.</div>
      <Label 
        text='Texto aqui'
        level={5}
      />
      <div>.</div>
      <Link 
        text='Texto link'
        url='#'
        target='_blank'
      />
    </div>
  )
}

export default Pages;

  