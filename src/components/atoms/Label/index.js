import React from 'react';
import { LabelAtom } from './styled';

export const Label = ({text, ...props}) => {
  return <LabelAtom {...props}>{text}</LabelAtom>
}

export default Label;
