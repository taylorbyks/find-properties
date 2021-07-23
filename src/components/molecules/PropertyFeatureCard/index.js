import React from 'react'
import { PropertyFeatureCardContainer } from './styles'

import Icon from 'react-native-vector-icons/Ionicons'
import { DetailText } from '../../atoms'

export const PropertyFeatureCard = ({ iconName, featureText }) => {
  return (
    <PropertyFeatureCardContainer>
      <Icon name={iconName} color="white" size={36} />
      <DetailText>{featureText}</DetailText>
    </PropertyFeatureCardContainer>
  )
}
