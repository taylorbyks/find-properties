import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { usePropertiesStore } from '../../../services/stores'
import { CardDescription, CardHightLightText, CardTitle } from '../../atoms'
import { CardContainer, CardImage, TextContainer, TextContainerLeft, TextContainerRight } from './styles'

export const PropertyCard = ({ imgSource, title, description, price, item }) => {
  const navigation = useNavigation()
  const { setSelectedProperty } = usePropertiesStore()

  const formatedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  function onClickItemContainer() {
    setSelectedProperty(item)
    navigation.navigate('Detail')
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
