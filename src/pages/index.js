import React from 'react';
import { Button } from '../components/atoms'

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
    </div>
  )
}

export default Pages;

  