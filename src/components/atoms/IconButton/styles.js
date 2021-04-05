import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native'

export const ButtonContainer = styled.TouchableOpacity`
  width: ${({ theme }) => theme.metrics.px(48)}px;
  height: ${({ theme }) => theme.metrics.px(48)}px;
  background-color: ${({ theme, transparent }) => transparent ? theme.colors.purpleTransparent : theme.colors.backgrountLight};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.metrics.px(6)}px;
`

