import styled from 'styled-components/native'
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Input } from './index'

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.backgroundDark};
  padding: ${({ theme }) => theme.metrics.px(24)}px;
`

const stories = storiesOf('Input', module)

stories.addDecorator((getStory) => <Wrapper>{getStory()}</Wrapper>)

stories.add('Title', () => {
  const placeholder = text('Placeholder', 'Digite')
  const label = text('Label', 'Exemplo de Text')
  return <Title placeholder={placeholder} label={label} />
})