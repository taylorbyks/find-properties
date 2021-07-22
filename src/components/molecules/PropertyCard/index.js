import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { CardDescription, CardHightLightText, CardTitle } from '../../atoms'
import { CardContainer, CardImage, TextContainer, TextContainerLeft, TextContainerRight } from './styles'

export const PropertyCard = ({ imgSource, title, description, price, item }) => {
  const navigation = useNavigation()

  const formatedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  function onClickItemContainer() {
    navigation.navigate('Detail', { selectedProperty: item })
  }

  return (
    <CardContainer onPress={onClickItemContainer}>
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
