import React from 'react'
import { Button, Input, Label, Link, Title, Text } from '../components/atoms'
import { CardError, CardSelection, CardDetails } from '../components/molecules'

function Pages() {
  return (
    <div 
      style={{
        position: 'absolute', 
        left: '50%', 
        top: '50%',
        transform: 'translate(-50%, -50%)'
      }}
    >
      <Button>Primary</Button>
      <div>.</div>
      <Input placeholder='Input'/>
      <div>.</div>
      <Label 
        text='Label aqui'
        type='warning'
      />
      <div>.</div>
      <Link 
        text='Texto link'
        url='#'
        target='_blank'
      />
      <div>.</div>
      <Title 
        text='Title aqui'
        level={3}
      />
      <div>.</div>
      <Text 
        ellipsis={{ rows: 2, expandable: true, symbol: 'more' }}
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      />
      <CardError title="Ops! Tivemos um problema com o Serviço." message="Aguarde e tente novamente em alguns instantes!"/>
      <div>.</div>
      <CardSelection 
        title="Nome do Projeto" 
        job="Vaga" 
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." labName="Nome do Laboratório"
      />
      <div>.</div>
      <CardDetails
        title="Nome do Projeto" 
        job="Vaga" 
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." labName="Nome do Laboratório"
      />
      <div>.</div>
    </div>
  )
}

export default Pages;

  