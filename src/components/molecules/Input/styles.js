import styled, { css } from "styled-components/native";

export const InputContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
`

export const InputText = styled.TextInput`
  ${({ theme }) => css`
    height: ${theme.metrics.px(48)}px;
    border-radius: ${theme.metrics.px(12)}px;
    width: 100%;
    background-color: ${theme.colors.backgroundLight};
    margin-top: ${theme.metrics.px(12)}px;
    font-size: ${theme.metrics.px(16)}px;
    color: white;
    padding-left: ${theme.metrics.px(12)}px;
    font-family: 'Montserrat-Regular';
  `}
`