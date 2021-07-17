import styled, { css } from 'styled-components/native'

export const LoadingContainer = styled.View`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: ${theme.metrics.px(24)}px;
  `}
`