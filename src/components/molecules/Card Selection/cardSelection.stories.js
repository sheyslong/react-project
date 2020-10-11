import React from 'react';
import CardSelection from './index';
import { colors } from '../../../styles/colors';

export default {
  title: 'Card Selection Molecule Component',
  component: CardSelection,
};

const title="Me Escolhe" 
const description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." 
const labName="UFCG"

export const ToStorybookSelectionAll= () => 
  <div>
    <CardSelection title={ title } job={ "FullStack" } description={ description } labName={ labName } colors={ colors.fullstack }/>
    <CardSelection title={ title } job={ "Front-end" } description={ description } labName={ labName } colors={ colors.frontEnd }/>
    <CardSelection title={ title } job={ "Back-end" } description={ description } labName={ labName } colors={ colors.backEnd }/>
    <CardSelection title={ title } job={ "Tester" } description={ description } labName={ labName } colors={ colors.tester } />
  </div>

ToStorybookSelectionAll.story = {
  name: 'Card Selection All',
};
export const ToStorybookSelectionFull= () => <CardSelection title={ title } job={ "FullStack" } description={ description } labName={ labName } colors={ colors.fullstack }/>

ToStorybookSelectionFull.story = {
  name: 'Card Selection Job FullStack',
};

export const ToStorybookSelectionFront = () => <CardSelection title={ title } job={ "Front-end" } description={ description } labName={ labName } colors={ colors.frontEnd }/>

ToStorybookSelectionFront.story = {
  name: 'Card Selection Job Front-End',
};


export const ToStorybookSelectionBack = () => <CardSelection title={ title } job={ "Back-end" } description={ description } labName={ labName } colors={ colors.backEnd }/>

ToStorybookSelectionBack.story = {
  name: 'Card Selection Job Back-End',
};

export const ToStorybookSelectionTester = () => <CardSelection title={ title } job={ "Tester" } description={ description } labName={ labName } colors={ colors.tester } />

ToStorybookSelectionTester.story = {
  name: 'Card Selection Job Tester',
};