import React from 'react';
import { LinkAton } from './styled';

export const Link = (props) => {
  return (
    <LinkAton 
      href={props.url}
      target={props.target}
    >
      {props.text}
    </LinkAton>
  )
}

export default Link;
