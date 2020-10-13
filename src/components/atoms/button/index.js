import React from 'react';
import { ButtonAtom } from './styled';

export const Button = ({onClick, ...props}) => {
  return <ButtonAtom shape="omitted" onClick={ onClick } {...props}/>;
}

export default Button;
