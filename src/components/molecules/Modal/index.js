import React from 'react'
import { ModalContainer, ModalBackground, BottomContainer, HeaderContainer } from './styles'
import { Title, IconButton } from '../../atoms'

export const Modal = ({ title, visible, onClose, children }) => {
  return (
    <ModalContainer visible={visible} transparent onRequestClose={onClose}>
      <ModalBackground>
        <BottomContainer>
          <HeaderContainer>
            <Title>{title}</Title>
            <IconButton iconName="close" onPress={onClose} />
          </HeaderContainer>
          {children}
        </BottomContainer>
      </ModalBackground>
    </ModalContainer>
  )
}
