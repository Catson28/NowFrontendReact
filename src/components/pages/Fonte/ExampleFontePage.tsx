import styled, { ThemeProvider } from 'styled-components'
import React from "react";
import Titulo800 from '../../partials/HomePartial/Typography/Titulo800'

import { GlobalStyles } from '../../../services/styles/Global'
import { theme } from '../../../services/styles/Theme'


const ExampleFontePage: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Titulo800 />
    </ThemeProvider>
  )
}

export default ExampleFontePage



