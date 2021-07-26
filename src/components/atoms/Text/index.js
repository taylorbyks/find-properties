import styled, { css } from 'styled-components/native'

const BaseText = styled.Text`
  ${({ theme, mt, mb, ml, mr }) => css`
    margin-top: ${theme.metrics.px(mt || 0)}px;
    margin-bottom: ${theme.metrics.px(mb || 0)}px;
    margin-left: ${theme.metrics.px(ml || 0)}px;
    margin-right: ${theme.metrics.px(mr || 0)}px;
  `}
`

export const Title = styled(BaseText)`
  ${({ theme }) => css`
    font-size: ${theme.metrics.px(28)}px;
    color: white;
    font-family: ${theme.fonts.bold};
  `}
`

export const InputLabel = styled(BaseText)`
  ${({ theme }) => css`
    font-size: ${theme.metrics.px(14)}px;
    color: white;
    font-family: ${theme.fonts.semibold};
  `}
`

export const InputSectionLabel = styled(BaseText)`
  ${({ theme }) => css`
    font-size: ${theme.metrics.px(16)}px;
    color: white;
    font-family: ${theme.fonts.semibold};
  `}
`

export const ButtonText = styled(BaseText)`
  ${({ theme }) => css`
    font-size: ${theme.metrics.px(22)}px;
    color: white;
    font-family: ${theme.fonts.bold};
  `}
`

//Detail
export const DetailTitle = styled(BaseText)`
  ${({ theme }) => css`
    font-size: ${theme.metrics.px(24)}px;
    color: white;
    font-family: ${theme.fonts.bold};
  `}
`

export const DetailSubTitle = styled(BaseText)`
  ${({ theme }) => css`
    font-size: ${theme.metrics.px(18)}px;
    color: white;
    font-family: ${theme.fonts.semibold};
  `}
`

export const DetailText = styled(BaseText)`
  ${({ theme }) => css`
    font-size: ${theme.metrics.px(14)}px;
    color: white;
    font-family: ${theme.fonts.regular};
  `}
`

export const DetailSectionTitle = styled(BaseText)`
  ${({ theme }) => css`
    font-size: ${theme.metrics.px(20)}px;
    color: white;
    font-family: ${theme.fonts.bold};
  `}
`

//Card
export const CardTitle = styled(BaseText)`
  ${({ theme }) => css`
    font-size: ${theme.metrics.px(14)}px;
    color: white;
    font-family: ${theme.fonts.bold};
  `}
`

export const CardDescription = styled(BaseText)`
  ${({ theme }) => css`
    font-size: ${theme.metrics.px(10)}px;
    color: white;
    font-family: ${theme.fonts.regular};
  `}
`

export const CardHightLightText = styled(BaseText)`
  ${({ theme }) => css`
    font-size: ${theme.metrics.px(16)}px;
    color: white;
    font-family: ${theme.fonts.semibold};
  `}
`
