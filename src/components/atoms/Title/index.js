import React from 'react';
import { TitleAtom } from './styled';

export const Title = ({text, ...props}) => {
  return <TitleAtom {...props}>{text}</TitleAtom>
}

export default Title
