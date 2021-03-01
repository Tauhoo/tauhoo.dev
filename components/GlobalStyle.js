import { createGlobalStyle } from "styled-components"
import colors from "../config/colors"

const GlobalStyle = createGlobalStyle`
body {
  margin: 0px;
  padding: 0px;
  font-size: 18px;
  font-family: "Sarabun";
}

* {
  box-sizing: border-box;
}

@media (max-width: 840px) {
  body {
    font-size: 14px;
  }
}

html {
  scroll-behavior: smooth;
}

/* width */
::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}

::-moz-selection {
  /* Code for Firefox */
  color: ${({ darkMode }) => (darkMode ? colors.black : colors.white)};
  background-color: ${({ darkMode }) =>
    darkMode ? colors.white : colors.black};
}

::selection {
  color: #3c40c6;
  color: ${({ darkMode }) => (darkMode ? colors.black : colors.white)};
  background-color: ${({ darkMode }) =>
    darkMode ? colors.white : colors.black};
}

`

export default GlobalStyle
