import React from 'react';
import { Button, Input, Label } from '../components/atoms'

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
    </div>
  )
}

export default Pages;

  