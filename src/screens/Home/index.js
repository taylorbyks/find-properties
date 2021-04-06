import React from 'react'
import { IconButton, Input, Title } from '../../components'
import { ScreenContainer, TopContainer, TitleContainer } from './styles'

export const HomeScreen = () => {
  return (
    <ScreenContainer>
      <TopContainer>
        <TitleContainer>
          <Title>Encontre aqui seu imóvel</Title>
        </TitleContainer>
        <IconButton iconName="filter" />
        <Input label="Localização" placeholder="Digite o endereço" />
      </TopContainer>
    </ScreenContainer>
  )
}