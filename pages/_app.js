import "../styles/globals.css"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import styled from "styled-components"

const NavbarDummy = styled.div`
  width: 100%;
  height: 100px;
  @media (max-width: 840px) {
    height: 70px;
  }
`

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar darkMode={false}></Navbar>
      <NavbarDummy></NavbarDummy>
      <Component {...pageProps} />
      <Footer darkMode={false}></Footer>
    </>
  )
}

export default MyApp
