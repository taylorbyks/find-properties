import styled, { css } from 'styled-components/native'

export const ScreenContainer = styled.View`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: ${theme.colors.backgroundDark};
    width: 100%;
    height: 100%;

  `}
`

export const ContentContainer = styled.View`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: ${theme.colors.backgroundDark};
    width: ${theme.metrics.wp(86)}px;
  `}
`

export const TopContainer = styled.View`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: ${theme.metrics.wp(100)}px;
    margin-bottom: ${theme.metrics.px(10)}px;
    padding: ${theme.metrics.px(24)}px;
  `}
`

export const TitleContainer = styled.View`
  width: 65%;
`