import React from 'react';
import { TextAtom } from './styled';

export const Text = ({text, ...props}) => {
  return <TextAtom {...props}>{text}</TextAtom>;
}

export default Text;
