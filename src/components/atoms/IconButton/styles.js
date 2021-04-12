import styled, { css } from 'styled-components/native'

export const IconButtonContainer = styled.TouchableOpacity`
  ${({ theme, transparent }) => css`
    width: ${theme.metrics.px(48)}px;
    height: ${theme.metrics.px(48)}px;
    background-color: ${transparent ? theme.colors.purpleTransparent : theme.colors.backgroundLight};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${theme.metrics.px(6)}px;
  `}
`

