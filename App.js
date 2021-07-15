import React from 'react'
import { ThemeProvider } from 'styled-components'
import { HomeScreen } from './src/screens'
import { theme } from './src/styles/themes'
import StoryBook from './storybook'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StoryBook />
    </ThemeProvider>
  )
}

export default App
