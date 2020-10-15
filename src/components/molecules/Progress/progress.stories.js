import React from 'react';
import Progress from './index';
import { colors } from '../../../styles/colors';

export default {
  title: 'Progress Molecule Component',
  component: Progress,
};

export const ToStorybookProgressNoInit= () => 
<div>
    <Progress color={ colors.progress.progress } percent={0} phase={1} status="inactive"/>
</div>

ToStorybookProgressNoInit.story = {
  name: 'Progress no init',
};

export const ToStorybookProgressDesclassified= () => 
<div>
    <Progress color={ colors.progress.progress } percent={0} phase={1} status="inactive"/>
    
    <Progress color={ colors.progress.progress } percent={33} phase={1} status="active"/>
    <Progress color={ colors.progress.classified } percent={33} phase={1} status="success"/>

    <Progress color={ colors.progress.progress } percent={66} phase={2} status="active"/>
    <Progress color={ colors.progress.declassified } percent={66} phase={2} status="exception"/>
</div>

ToStorybookProgressDesclassified.story = {
  name: 'Progress Desclassified',
};


export const ToStorybookProgressClassified= () => 
<div>
    <Progress color={ colors.progress.progress } percent={0} phase={1} status="inactive"/>
    
    <Progress color={ colors.progress.progress } percent={33} phase={1} status="active"/>
    <Progress color={ colors.progress.classified } percent={33} phase={1} status="success"/>

    <Progress color={ colors.progress.progress } percent={66} phase={2} status="active"/>
    <Progress color={ colors.progress.classified } percent={66} phase={2} status="success"/>

    <Progress color={ colors.progress.progress } percent={100} phase={3} status="active"/>
    <Progress color={ colors.progress.classified } percent={100} phase={3} status="success"/>
</div>

ToStorybookProgressClassified.story = {
  name: 'Progress Classified',
};
