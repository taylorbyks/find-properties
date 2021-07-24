import React from 'react'
import { ModalContainer, ModalBackground, BottomContainer, HeaderContainer } from './styles'
import { Title, IconButton } from '../../atoms'

export const ModalInputs = ({ title, visible, onClose }) => {
  return (
    <ModalContainer transparent visible={visible} onRequestClose={onClose}>
      <ModalBackground>
        <BottomContainer>
          <HeaderContainer>
            <Title>{title}</Title>
            <IconButton iconName="close" onPress={onClose} />
          </HeaderContainer>
        </BottomContainer>
      </ModalBackground>
    </ModalContainer>
  )
}
