import React from 'react'
import { IconButton, Input, Title, HouseCard } from '../../components'
import { ScreenContainer, TopContainer, TitleContainer } from './styles'

export const HomeScreen = () => {
  return (
    <ScreenContainer>
      <TopContainer>
        <TitleContainer>
          <Title>Encontre aqui seu imóvel</Title>
        </TitleContainer>
        <IconButton iconName="filter" />
      </TopContainer>
      <Input label="Localização" placeholder="Digite o endereço" />
      <HouseCard imageSource="https://images.unsplash.com/photo-1571055107559-3e67626fa8be?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80" />
    </ScreenContainer>
  )
}
