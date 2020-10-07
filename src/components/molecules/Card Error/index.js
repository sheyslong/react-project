import React from 'react'
import { CardMolecule } from './styled'
import { Title, Text, ButtonLink } from '../../atoms'

export const CardError = ({title, message, ...props}) => {
  return <>
        <CardMolecule
            hoverable
            {...props}
        >
            <Title level={5}>{ title }</Title>
            <Text> { message }</Text>
            <ButtonLink>Ok, Entendi</ButtonLink>
        </CardMolecule>
  </>;
};

export default CardError;
