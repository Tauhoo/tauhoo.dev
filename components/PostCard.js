import React from "react"
import styled from "styled-components"
import PostContent from "./PostContent"
import Image from "./Image"

const ContentContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 50px;
  justify-items: center;
  align-items: center;
  @media (max-width: 840px) {
    gap: 30px;
  }
`

const ImageContainer = styled.div`
  width: 200px;
  height: 200px;
  @media (max-width: 840px) {
    width: 150px;
    height: 150px;
  }
`

export default function PostCard({
  darkMode = false,
  title,
  detail,
  tag,
  src,
}) {
  return (
    <ContentContainer>
      <ImageContainer>
        <Image src={src}></Image>
      </ImageContainer>
      <PostContent
        title={title}
        detail={detail}
        darkMode={darkMode}
        tag={tag}
      ></PostContent>
    </ContentContainer>
  )
}
