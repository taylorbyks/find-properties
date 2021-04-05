import React from 'react'
import { IconButtonContainer } from './styles'

import Icon from 'react-native-vector-icons/Ionicons'

export const IconButton = ({ iconName, transparent }) => {
  return (
    <IconButtonContainer transparent={transparent}>
      <Icon
        name={iconName}
        color="white"
        size={12}
      />
    </IconButtonContainer>
  )
}