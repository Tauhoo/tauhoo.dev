import React from "react"
import styled from "styled-components"
import PostContent from "./PostContent"
import Image from "./Image"
import colors from "../config/colors"

const ContentContainer = styled.a`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content 1fr;
  gap: 50px;
  justify-items: center;
  text-decoration: none;
  padding: 30px 20px;
  border-radius: 10px;
  transition: 0.3s;
  @media (max-width: 840px) {
    gap: 30px;
  }

  &:hover {
    background-color: ${colors.lightGray};
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
  link,
}) {
  return (
    <ContentContainer
      onClick={() => console.log(link)}
      href={link}
      target="_blank"
    >
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
