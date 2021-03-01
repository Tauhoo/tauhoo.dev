import React from "react"
import styled from "styled-components"
import colors from "../config/colors"
import { lineHeight, lineHeightSmall } from "../config/font"

const Container = styled.div`
  width: 100%;
  color: ${({ darkMode, highlight }) =>
    darkMode ? colors.darkWhite : highlight ? colors.lightBlack : colors.gray};
  font-weight: ${({ bold }) => (bold ? "bold" : "lighter")};
  white-space: pre-wrap;
  word-break: break-word;
  line-height: ${lineHeight.text};

  @media (max-width: 840px) {
    line-height: ${lineHeightSmall.text};
  }
`

export default function Text({
  children,
  bold = false,
  darkMode = false,
  highlight = false,
  style,
}) {
  return (
    <Container {...{ bold, darkMode, highlight }} style={style}>
      {children}
    </Container>
  )
}
