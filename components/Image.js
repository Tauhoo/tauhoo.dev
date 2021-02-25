import React, { useState } from "react"
import styled from "styled-components"
import colors from "../config/colors"

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: ${colors.gray};
  border-radius: 50%;
  overflow: hidden;
  position: relative;
`

const Img = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  object-fit: cover;
`

export default function Image({ src }) {
  return (
    <Container>
      <Img src={src}></Img>
    </Container>
  )
}
