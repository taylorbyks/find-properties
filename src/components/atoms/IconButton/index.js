import React from 'react'
import { IconButtonContainer } from './styles'

import Icon from 'react-native-vector-icons/Ionicons'

export const IconButton = ({ iconName, transparent = false, onPress }) => {
  return (
    <IconButtonContainer onPress={onPress} transparent={transparent}>
      <Icon name={iconName} color="white" size={20} />
    </IconButtonContainer>
  )
}
