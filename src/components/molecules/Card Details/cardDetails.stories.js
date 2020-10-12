import React from 'react'
import CardDetails from './index'

export default {
  title: 'Card Details Molecule Component',
  component: CardDetails,
};

const title="Nome do Projeto"
const job="Vaga"
const description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." 
const labName="UFCG"

export const ToStorybookText = () => <CardDetails projectName={ title } job={ job } description={ description } labName={ labName }/>;

ToStorybookText.story = {
  name: 'Card Details',
};
