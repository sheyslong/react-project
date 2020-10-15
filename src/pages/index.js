import React from 'react'
import { Button, Input, Label, Link, Title, Text } from '../components/atoms'
import { CardError, Selection, Progress } from '../components/molecules'
import { colors } from '../styles/colors';

function Pages() {
  const title="Me Escolhe" 
  const description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." 
  const labName="UFCG"

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
      <CardError error="Ops! Tivemos um problema com o Serviço." message="Aguarde e tente novamente em alguns instantes!"/>
      <div>.</div>
      <div>
        <Selection 
          projectName={ title } 
          job={ "FullStack" } 
          description={ description } 
          labName={ labName } 
          colors={ colors.fullstack }
          />
        <Selection 
          projectName={ title } 
          job={ "Front-end" } 
          description={ description } 
          labName={ labName } 
          colors={ colors.frontEnd }
          />
        <Selection 
          projectName={ title } 
          job={ "Back-end" } 
          description={ description } 
          labName={ labName } 
          colors={ colors.backEnd }
          />
        <Selection 
          projectName={ title } 
          job={ "Tester" } 
          description={ description } 
          labName={ labName } 
          colors={ colors.tester } 
          />
      </div>
      <div>.</div>
      <div>
        <Progress color={ colors.progress.progress } percent={33} phase={1} status="active"/>
        <Progress color={ colors.progress.classified } percent={33} phase={1} status="success"/>
        <Progress color={ colors.progress.declassified } percent={66} phase={2} status="exception"/>
      </div>
    </div>
  )
}

export default Pages;

  