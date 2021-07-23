import styled, { css } from 'styled-components/native'

export const PropertiesListContainer = styled.FlatList`
  ${({ theme }) => css`
    padding: ${theme.metrics.px(24)}px;
  `}
`

export const PropertiesListFooterContainer = styled.FlatList`
  ${({ theme }) => css`
    padding: ${theme.metrics.px(24)}px;
  `}
`
