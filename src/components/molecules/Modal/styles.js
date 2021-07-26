import styled, { css } from 'styled-components/native'

export const ModalContainer = styled.View`
  ${({ theme, visible }) => css`
    display: ${visible ? 'flex' : 'none'};
    flex: 1;
    width: ${theme.metrics.wp(100)}px;
    height: ${theme.metrics.hp(100)}px;
    background: transparent;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  `}
`

export const ModalBackground = styled.View`
  ${({ theme }) => css`
    flex: 1;
    align-items: flex-end;
    justify-content: flex-end;
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.darkTransparent};
  `}
`

export const BottomContainer = styled.ScrollView`
  ${({ theme }) => css`
    display: flex;
    background-color: ${theme.colors.backgroundDark};
    padding: ${theme.metrics.px(24)}px;
    width: 100%;
    height: ${theme.metrics.hp(86)}px;
    border-top-left-radius: ${theme.metrics.px(24)}px;
    border-top-right-radius: ${theme.metrics.px(24)}px;
    position: absolute;
    bottom: 0;
  `}
`

export const HeaderContainer = styled.View`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
  `}
`
