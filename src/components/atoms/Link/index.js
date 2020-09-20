import React from 'react';
import { LinkAton } from './styled';

export const Link = ({text, ...props}) => {
  return <LinkAton {...props}>{text}</LinkAton>
}

export default Link;
