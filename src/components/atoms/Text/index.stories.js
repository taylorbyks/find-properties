import styled, { css } from 'styled-components/native'
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Title, InputLabel, CardDescription, CardHightLightText, CardTitle, DetailSectionTitle, DetailSubTitle, DetailText, DetailTitle } from './index'

const Wrapper = styled.View`
  ${({ theme }) => css`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${ theme.colors.backgroundDark};
    padding: ${ theme.metrics.px(24)}px;
  `}
`

const stories = storiesOf('Text', module)

stories.addDecorator((getStory) => <Wrapper>{getStory()}</Wrapper>)

stories.add('Title', () => {
  const value = text('Title', 'Exemplo de Text')
  return <Title>{value}</Title>
})

stories.add('CardDescription', () => {
  const value = text('CardDescription', 'Exemplo de Text')
  return <CardDescription>{value}</CardDescription>
})

stories.add('CardHightLightText', () => {
  const value = text('CardHightLightText', 'Exemplo de Text')
  return <CardHightLightText>{value}</CardHightLightText>
})

stories.add('CardTitle', () => {
  const value = text('CardTitle', 'Exemplo de Text')
  return <CardTitle>{value}</CardTitle>
})

stories.add('DetailSectionTitle', () => {
  const value = text('DetailSectionTitle', 'Exemplo de Text')
  return <DetailSectionTitle>{value}</DetailSectionTitle>
})

stories.add('DetailSubTitle', () => {
  const value = text('DetailSubTitle', 'Exemplo de Text')
  return <DetailSubTitle>{value}</DetailSubTitle>
})

stories.add('DetailText', () => {
  const value = text('DetailText', 'Exemplo de Text')
  return <DetailText>{value}</DetailText>
})

stories.add('DetailTitle', () => {
  const value = text('DetailTitle', 'Exemplo de Text')
  return <DetailTitle>{value}</DetailTitle>
})

stories.add('InputLabel', () => {
  const value = text('InputLabel', 'Exemplo de Text')
  return <InputLabel>{value}</InputLabel>
})