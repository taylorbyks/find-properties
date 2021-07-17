import styled, { css } from 'styled-components/native'

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.metrics.px(28)}px;
    color: white;
    font-family: ${theme.fonts.bold};
  `}
`

export const InputLabel = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.metrics.px(16)}px;
    color: white;
    font-family: ${theme.fonts.semibold};
  `}
`
export const ButtonText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.metrics.px(22)}px;
    color: white;
    font-family: ${theme.fonts.bold};
  `}
`

//Detail
export const DetailTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.metrics.px(24)}px;
    color: white;
    font-family: ${theme.fonts.bold};
  `}
`

export const DetailSubTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.metrics.px(18)}px;
    color: white;
    font-family: ${theme.fonts.regular};
  `}
`

export const DetailText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.metrics.px(14)}px;
    color: white;
    font-family: ${theme.fonts.regular};
  `}
`

export const DetailSectionTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.metrics.px(20)}px;
    color: white;
    font-family: ${theme.fonts.bold};
  `}
`

//Card
export const CardTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.metrics.px(14)}px;
    color: white;
    font-family: ${theme.fonts.bold};
  `}
`

export const CardDescription = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.metrics.px(10)}px;
    color: white;
    font-family: ${theme.fonts.regular};
  `}
`

export const CardHightLightText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.metrics.px(16)}px;
    color: white;
    font-family: ${theme.fonts.semibold};
  `}
`
