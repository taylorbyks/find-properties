import React from 'react'
import { ButtonContainer } from './styles'
import { ButtonText } from '../Text'

export const Button = ({ text, onPress, mt, mb, ml, mr }) => {
  return (
    <ButtonContainer onPress={onPress} mt={mt} mb={mb} ml={ml} mr={mr}>
      <ButtonText>{text}</ButtonText>
    </ButtonContainer>
  )
}
