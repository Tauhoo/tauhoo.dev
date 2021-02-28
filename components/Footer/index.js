import React from "react"
import Link from "next/link"
import styled from "styled-components"
import Background from "./Background"
import Text from "../Text"

const Container = styled.div`
  width: 100%;
  padding: 45px 0px;
  position: relative;
  margin-top: 50px;
  @media (max-width: 840px) {
    padding: 30px 0px;
  }
`

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const LinkContainer = styled.div`
  z-index: 998;
  display: grid;
  grid-template-columns: repeat(7, max-content);
  gap: 10px;
  justify-items: center;
  * {
    text-decoration: none;
  }
  @media (max-width: 450px) {
    grid-template-columns: 1fr;
  }
`

const TextPipeContainer = styled.div`
  @media (max-width: 450px) {
    display: none;
  }
`

const data = [
  { text: "Facebook", link: "https://www.facebook.com/tauhoo.ice", key: "0" },
  { text: "Github", link: "https://github.com/Tauhoo", key: "1" },
  {
    text: "tauhoo_ice@hotmail.com",
    link: "mailto:tauhoo_ice@hotmail.com",
    key: "2",
  },
  { text: `© ${new Date().getFullYear()}`, link: "/", key: "3" },
]

export default function Footer({ darkMode = false }) {
  return (
    <Container>
      <Background
        style={{
          position: "absolute",
          bottom: "0px",
          left: "0px",
          height: "100%",
          width: "100%",
        }}
      ></Background>
      <ContentContainer>
        <LinkContainer>
          {data.map(({ text, link, key }, index) => {
            return (
              <>
                <Link href={link} key={key}>
                  <a>
                    <Text darkMode={true}>{text}</Text>
                  </a>
                </Link>
                {index !== data.length - 1 ? (
                  <TextPipeContainer key={key + "_pipe"}>
                    <Text darkMode={true}>|</Text>
                  </TextPipeContainer>
                ) : null}
              </>
            )
          })}
        </LinkContainer>
      </ContentContainer>
    </Container>
  )
}
