import styled, { css } from 'styled-components/native'

export const PropertyFeatureCardContainer = styled.View`
  ${({ theme }) => css`
    width: ${theme.metrics.px(80)}px;
    height: ${theme.metrics.px(80)}px;
    background-color: ${theme.colors.backgroundLight};
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${theme.metrics.px(6)}px;
  `}
`
