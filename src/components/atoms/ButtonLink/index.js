import React from 'react';
import { ButtonAtom } from './styled';

export const ButtonLink = ({...props}) => {
  return <ButtonAtom type="link" shape="omitted" {...props}/>;
}

export default ButtonLink;
