import React from "react"
import styled from "styled-components"
import colors from "../config/colors"
import { fontFamily, lineHeight, fontSize } from "../config/font"

const Container = styled.div`
  width: 100%;
  color: ${({ darkMode }) => (darkMode ? colors : colors.lightBlack)};
  font-weight: ${({ bold }) => (bold ? "bold" : "lighter")};
  white-space: pre-wrap;
  word-break: break-word;
  line-height: ${({ level }) => lineHeight.topic[level]};
  font-family: ${fontFamily.topic};
  font-size: ${({ level }) => fontSize.topic[level]};
`

export default ({
  children,
  bold = false,
  darkMode = false,
  level = 0,
  style,
}) => {
  return (
    <Container {...{ bold, darkMode, level }} style={style}>
      {children}
    </Container>
  )
}
