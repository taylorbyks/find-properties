import React from 'react'
import { InputLabel } from '../../atoms'
import { InputText, InputContainer } from './styles'

export const Input = ({ label, placeholder }) => {
  return (
    <InputContainer>
      <InputLabel>{label}</InputLabel>
      <InputText placeholder={placeholder} placeholderTextColor="white" />
    </InputContainer>
  )
}