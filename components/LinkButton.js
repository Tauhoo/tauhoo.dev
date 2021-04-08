import Link from 'next/link'
import Text from './Text'
import styled from 'styled-components'
import { useState } from 'react'

const TextContainer = styled.a`
  text-decoration: none;
  position: relative;
  cursor: pointer;
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      div:nth-child(2) {
        width: 100%;
        opacity: 1;
      }
    }
  }
`

const UnderLine = styled.div`
  width: 0%;
  height: 3px;
  border-radius: 1.5px;
  background-color: white;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -100%);
  transition: 0.3s;
  opacity: 0;
`

function LinkButton({
  href = '/',
  onClick,
  darkMode,
  children,
  isNewTab = false,
}) {
  if (isNewTab) {
    return (
      <TextContainer onClick={onClick} target='_blank' href={href}>
        <Text style={{ marginBottom: '3px' }} darkMode={darkMode}>
          {children}
        </Text>
        <UnderLine></UnderLine>
      </TextContainer>
    )
  }
  return (
    <Link href={href}>
      <TextContainer onClick={onClick}>
        <Text style={{ marginBottom: '3px' }} darkMode={darkMode}>
          {children}
        </Text>
        <UnderLine></UnderLine>
      </TextContainer>
    </Link>
  )
}

export default LinkButton
