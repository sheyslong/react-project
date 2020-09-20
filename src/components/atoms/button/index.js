import React from 'react';
import { ButtonAtom } from './styled';
import './index.css'

export const Button = ({...props}) => {
  return <ButtonAtom shape="omitted" {...props}/>;
}

export default Button;
