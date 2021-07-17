import React from 'react'
import { StatusBar } from 'expo-status-bar'
import AppLoading from 'expo-app-loading'
import { useFonts, Montserrat_400Regular, Montserrat_600SemiBold, Montserrat_700Bold } from '@expo-google-fonts/montserrat'
import { ThemeProvider } from 'styled-components'
import { HomeScreen } from './src/screens'
import { theme } from './src/styles/themes'
import StoryBook from './storybook'

const App = () => {
  const [FontsLoaded] = useFonts({ Montserrat_400Regular, Montserrat_600SemiBold, Montserrat_700Bold })

  if (!FontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" />
      <HomeScreen />
    </ThemeProvider>
  )
}

export default App
