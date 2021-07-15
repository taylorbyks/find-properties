import React from 'react'
import { CardDescription, CardHightLightText, CardTitle } from '../../atoms'
import { CardContainer, CardImage, TextContainer, TextContainerLeft, TextContainerRight } from './styles'

export const HouseCard = ({ imgSource }) => {
  return (
    <CardContainer>
      <CardImage source={{ uri: imgSource }} />
      <TextContainer>
        <TextContainerLeft>
          <CardTitle>Casa à venda</CardTitle>
          <CardDescription>Endereço</CardDescription>
        </TextContainerLeft>
        <TextContainerRight>
          <CardHightLightText>U$ 200,00</CardHightLightText>
        </TextContainerRight>
      </TextContainer>
    </CardContainer>
  )
}
