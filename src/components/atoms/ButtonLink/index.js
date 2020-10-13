import React from 'react';
import { ButtonAtom } from './styled';

export const ButtonLink = ({onClick, ...props}) => {
  return <ButtonAtom type="link" shape="omitted" onClick={ onClick } {...props} />;
}

export default ButtonLink;
