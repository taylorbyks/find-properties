import styled, { css } from 'styled-components/native'
import { text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react-native'
import React from 'react'
import { HouseCard } from './index'

const Wrapper = styled.View`
  ${({ theme }) => css`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.backgroundDark};
    padding: ${theme.metrics.px(24)}px;
  `}
`

const stories = storiesOf('HouseCard', module)

stories.addDecorator((getStory) => <Wrapper>{getStory()}</Wrapper>)

stories.add('HouseCard', () => {
  const image =
    'https://images.unsplash.com/photo-1571055107559-3e67626fa8be?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80'
  return <HouseCard imgSource={image} />
})
