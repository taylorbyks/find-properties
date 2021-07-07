import styled, { css } from 'styled-components/native'
import { text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react-native'
import React from 'react'
import { Input } from './index'

const Wrapper = styled.View`
  ${({ theme }) => css`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.backgroundDark};
    padding: ${theme.metrics.px(24)}px;
  `}
`

const stories = storiesOf('Input', module)

stories.addDecorator((getStory) => <Wrapper>{getStory()}</Wrapper>)

stories.add('Standard', () => {
  const placeholder = text('Placeholder', 'Digite')
  const label = text('Label', 'Exemplo de Text')
  return <Input placeholder={placeholder} label={label} />
})
