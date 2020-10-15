import React from 'react';
import { ButtonAtom } from './styled';

export const ButtonLink = ({color, onClick, ...props}) => {
  return <ButtonAtom color={ color } type="link" shape="omitted" onClick={ onClick } {...props} />;
}

export default ButtonLink;
