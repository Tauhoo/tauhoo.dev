import React from "react"
import styled from "styled-components"
import colors from "../config/colors"
import { lineHeight } from "../config/font"

const Container = styled.div`
  width: 100%;
  color: ${({ darkMode, highlight }) =>
    darkMode ? colors.white : highlight ? colors.lightBlack : colors.gray};
  font-weight: ${({ bold }) => (bold ? "bold" : "lighter")};
  white-space: pre-wrap;
  word-break: break-word;
  line-height: ${lineHeight.text};
`

export default ({
  children,
  bold = false,
  darkMode = false,
  highlight = false,
  style,
}) => {
  return (
    <Container {...{ bold, darkMode, highlight }} style={style}>
      {children}
    </Container>
  )
}
