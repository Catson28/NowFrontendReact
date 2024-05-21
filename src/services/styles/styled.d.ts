// import original module declarations
import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primaryText: "#007bff"          // question text color
      secondaryText: "#FFF600"        // answer text color
      themeText: "#007bff"
      themeColor: "#FFF600"
      themeGradient: "linear-gradient(to right, #007bff, #FFF600)"
      background: "#E5E5E5"
      cardBackground: "#FFFFFF"
      selectTopicBg: "#FFFFFF"
      appLogo: "#007bff"
      buttonText: "#FFFFFF"
      outlineButtonText: "#007bff"
      buttonBackground: "linear-gradient(90.04deg, #007bff 0.03%, #FFF600 99.96%)"
      selectedAnswer: "#FFF600"
      infoText: "#FF783F"            // skip tag text
      infoBackground: "#ffb23f26"    // skip tag background
      border: "#EAEAEA"
      answerBg: "#FFFFFF"
      disabledCard: "#fbf4ecbc"
      disabledButton: "#e7e8e9"
      success: "#12B40E"
      successLight: "#DDFFDC"
      danger: "#FF143E"
      dangerLight: "#FFD7DE"
      white: "#FFFFFF"
      black: "#000000"
      dark: "#282526"
      darkGray: "#9fa3a9"
      darkerGray: "#817a8e"
    }
    shadows: {
      activeButton: '3px 2px 22px 1px rgba(0, 0, 0, 0.24)'
    }
    fonts: {
      anekMalayalam: 'Anek Malayalam'
      aristaPro: 'Arista Pro'
      quicksand: 'Quicksand'
    }
    paddings: {
      container: '15px'
      pageTop: '30px'
    }
    margins: {
      pageTop: '30px'
    }
  }
}
