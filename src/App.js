import React from "react";
import { ThemeProvider } from 'styled-components'
import { SplashScreen } from "./screens"
import { theme } from './styles/themes'


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SplashScreen />
    </ThemeProvider>
  );
}

export default App
