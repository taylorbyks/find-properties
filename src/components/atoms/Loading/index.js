import React from 'react'
import { ActivityIndicator } from 'react-native'
import { LoadingContainer } from './styles'
import { DetailSubTitle } from '../Text'

export const Loading = () => {
  return (
    <LoadingContainer>
      <ActivityIndicator size="large" color="#fff" />
      <DetailSubTitle>Carregando</DetailSubTitle>
    </LoadingContainer>
  )
}
