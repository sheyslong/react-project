import React from 'react';
import { ButtonAtom } from './styled';

export const Button = ({onClick, color, ...props}) => {
  return <ButtonAtom color={color} shape="omitted" onClick={ onClick } {...props}/>;
}

export default Button;
