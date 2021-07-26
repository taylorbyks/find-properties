import styled, { css } from 'styled-components/native'

export const ButtonContainer = styled.TouchableOpacity`
  ${({ theme, mt, mb, ml, mr }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.backgroundDark};
    border-width: ${theme.metrics.px(2)}px;
    border-color: ${theme.colors.primary};
    border-radius: ${theme.metrics.px(12)}px;
    width: 100%;
    height: ${theme.metrics.px(56)}px;
    margin-top: ${theme.metrics.px(mt || 0)}px;
    margin-bottom: ${theme.metrics.px(mb || 0)}px;
    margin-left: ${theme.metrics.px(ml || 0)}px;
    margin-right: ${theme.metrics.px(mr || 0)}px;
  `}
`
