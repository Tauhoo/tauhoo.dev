import React, { useEffect, useRef, useState } from "react"
import Link from "next/link"
import LinkButton from "../LinkButton"
import styled from "styled-components"
import Background from "./Background"
import Text from "../Text"
import colors from "../../config/colors"
import Logo from "../Logo"

const Container = styled.div`
  width: 100%;
  height: 100px;
  position: fixed;
  top: ${({ visible }) => (visible ? "0px" : "-100px")};
  left: 0px;
  transition: 0.3s;
  @media (max-width: 840px) {
    height: 70px;
    top: ${({ visible }) => (visible ? "0px" : "-70px")};
    display: none;
  }
  z-index: 1000;
`

const SmallContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: ${({ visible }) => (visible ? "0vh" : "-100vh")};
  left: 0px;
  transition: 0.3s;
  display: none;
  @media (max-width: 840px) {
    display: block;
  }
  background-color: ${colors.lightBlack};
  z-index: 999;
`

const MenuContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0px;
  top: 0px;
  display: flex;
  justify-content: center;
`

const MenuLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 600px;
  height: 100%;
  justify-items: center;
  align-items: center;
  > a {
    text-decoration: none;
  }

  @media (max-width: 840px) {
    a:not(a:nth-child(3)) {
      display: none;
    }
    width: 100%;
    display: flex;
    justify-content: center;
  }
`

const MenuLayoutSmall = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 1fr;
  grid-template-rows: 100px repeat(4, 1fr);
  width: 100%;
  max-height: 500px;
  height: 100%;
  justify-items: center;
  align-items: center;
  * {
    text-decoration: none;
  }
`

export default function Navbar({ darkMode = false }) {
  const [visible, setVisible] = useState(true)
  const [visibleMenu, setVisibleMenu] = useState(false)
  const scrollY = useRef(0)

  const onScroll = () => {
    if (window.scrollY > scrollY.current) {
      setVisible(false)
    } else {
      setVisible(true)
    }
    scrollY.current = window.scrollY
  }

  useEffect(() => {
    if (typeof window === "undefined") return
    document.addEventListener("scroll", onScroll)

    return () => document.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <SmallContainer visible={visibleMenu}>
        <div
          style={{
            width: "100%",
            height: "70px",
            position: "absolute",
            bottom: "-70px",
            left: "0px",
            zIndex: "1200",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => setVisibleMenu(old => !old)}
        >
          <Logo></Logo>
        </div>
        <MenuLayoutSmall>
          <div onClick={() => setVisibleMenu(old => !old)}>
            <Logo></Logo>
          </div>
          <LinkButton
            href="/#blogs"
            onClick={() => setVisibleMenu(false)}
            darkMode={true}
          >
            Blogs
          </LinkButton>
          <LinkButton
            href="/#profile"
            onClick={() => setVisibleMenu(false)}
            darkMode={true}
          >
            Profile
          </LinkButton>
          <LinkButton
            href="/#experience"
            onClick={() => setVisibleMenu(false)}
            darkMode={true}
          >
            Experience
          </LinkButton>
          <LinkButton
            href="/#contact"
            onClick={() => setVisibleMenu(false)}
            darkMode={true}
          >
            Contact
          </LinkButton>
        </MenuLayoutSmall>
        <Background
          darkMode={darkMode}
          style={{
            width: "100%",
            height: "70px",
            position: "absolute",
            bottom: "-70px",
            left: "0px",
          }}
        ></Background>
      </SmallContainer>
      <Container visible={visible || visibleMenu}>
        <Background
          darkMode={darkMode}
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: "0px",
            left: "0px",
          }}
        ></Background>
        <MenuContainer>
          <MenuLayout>
            <LinkButton href="/#blogs" darkMode={true}>
              Blogs
            </LinkButton>
            <LinkButton href="/#profile" darkMode={true}>
              Profile
            </LinkButton>
            <Link href="/#top">
              <a>
                <Logo></Logo>
              </a>
            </Link>
            <LinkButton href="/#experience" darkMode={true}>
              Experience
            </LinkButton>
            <LinkButton href="/#contact" darkMode={true}>
              Contact
            </LinkButton>
          </MenuLayout>
        </MenuContainer>
      </Container>
    </>
  )
}
