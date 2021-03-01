import React from "react"
import styled from "styled-components"
import colors from "../config/colors"
import {
  fontFamily,
  lineHeight,
  fontSize,
  fontSizeSmall,
  lineHeightSmall,
} from "../config/font"

const Container = styled.div`
  width: 100%;
  color: ${({ darkMode }) => (darkMode ? colors.white : colors.lightBlack)};
  font-weight: ${({ bold }) => (bold ? "bold" : "lighter")};
  white-space: pre-wrap;
  word-break: break-word;
  line-height: ${({ level }) => lineHeight.topic[level]};
  font-family: ${fontFamily.topic};
  font-size: ${({ level }) => fontSize.topic[level]};
  transition: 0.3s;

  @media (max-width: 840px) {
    line-height: ${({ level }) => lineHeightSmall.topic[level]};
    font-size: ${({ level }) => fontSizeSmall.topic[level]};
  }
`

export default function Topic({
  children,
  bold = false,
  darkMode = false,
  level = 0,
  style,
}) {
  return (
    <Container {...{ bold, darkMode, level }} style={style}>
      {children}
    </Container>
  )
}
