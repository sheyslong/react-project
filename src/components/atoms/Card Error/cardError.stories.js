import React, { useState } from 'react'
import CardError from './index'
import { Button } from '../../atoms'
export default {
  title: 'Card Error Molecule Component',
  component: CardError,
};

const title="Ops! Tivemos um problema com o Serviço."
const message = "Aguarde e tente novamente em alguns instantes!"

const Erro = () => {
  const [open, setOpen] = useState(false)

  return<>
    {  open ?
        <CardError error={title} message={message} onClick={() => setOpen(false)}/> :
        <Button onClick={() => setOpen(true)}>Open Card Error</Button>
    }
  </>
}

export const ToStorybookCard = () => <Erro/>;

ToStorybookCard.story = {
  name: 'Card Error',
}
