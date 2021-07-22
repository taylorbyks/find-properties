import styled, { css } from 'styled-components/native'

export const ScreenContainer = styled.View`
  ${({ theme }) => css`
    flex: 1;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: ${theme.colors.backgroundDark};
    width: 100%;
    height: 100%;
  `}
`

export const ImageBackground = styled.ImageBackground`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    height: 40%;
    padding: ${theme.metrics.px(48)}px ${theme.metrics.px(24)}px;
  `}
`

export const BottomContainer = styled.View`
  ${({ theme }) => css`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: ${theme.colors.backgroundDark};
    padding: ${theme.metrics.px(24)}px;
    width: 100%;
    height: ${theme.metrics.hp(65)}px;
    border-top-left-radius: ${theme.metrics.px(24)}px;
    border-top-right-radius: ${theme.metrics.px(24)}px;
    position: absolute;
    bottom: 0;
  `}
`
