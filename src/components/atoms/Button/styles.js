import styled, { css } from 'styled-components/native'

export const ButtonContainer = styled.TouchableOpacity`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.backgroundDark};
    border-width: ${theme.metrics.px(2)};
    border-color: ${theme.colors.primary};
    border-radius: ${theme.metrics.px(12)}px;
    width: 100%;
    height: ${theme.metrics.px(56)}px;
  `}
`
