import React from 'react';
import CardError from './index';

export default {
  title: 'Card Error Molecule Component',
  component: CardError,
};
const title="Ops! Tivemos um problema com o Serviço."
const message = "Aguarde e tente novamente em alguns instantes!"


export const ToStorybookText = () => <CardError title={title} message={message}/>;

ToStorybookText.story = {
  name: 'Card Error',
};
