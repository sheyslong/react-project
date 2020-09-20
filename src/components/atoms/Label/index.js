import React from 'react';
import { LabelAton } from './styled';

export const Label = (props) => {
return <LabelAton level={props.level}>{props.text}</LabelAton>
}

export default Label;
