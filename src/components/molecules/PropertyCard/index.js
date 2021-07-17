import React from 'react'
import { CardDescription, CardHightLightText, CardTitle } from '../../atoms'
import { CardContainer, CardImage, TextContainer, TextContainerLeft, TextContainerRight } from './styles'

export const PropertyCard = ({ imgSource, title, description, price }) => {
  const formatedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  return (
    <CardContainer>
      <CardImage source={{ uri: imgSource }} />
      <TextContainer>
        <TextContainerLeft>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </TextContainerLeft>
        <TextContainerRight>
          <CardHightLightText>{price != null ? formatedPrice.format(price) : ' '}</CardHightLightText>
        </TextContainerRight>
      </TextContainer>
    </CardContainer>
  )
}
