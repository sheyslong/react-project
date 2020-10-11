import React, { useState } from 'react'
import { CardMolecule } from './styled'
import { Title, Text, ButtonLink } from '../../atoms'

export const CardError = ({title, message, ...props}) => {
  const [open, setOpen] = useState(true); 
  
  return <>
        <CardMolecule
            hoverable
            {...props}
        >
            <Title level={5}>{ title }</Title>
            <Text> { message }</Text>
            <ButtonLink onClick={() => setOpen(false)}>Ok, Entendi</ButtonLink>
        </CardMolecule>
  </>;
};

export default CardError;
