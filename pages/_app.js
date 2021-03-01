import "../styles/globals.css"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Layout from "../components/Layout"
import NavbarDummy from "../components/NavbarDummy"
import ModeSwitch from "../components/ModeSwitch"
import { useState } from "react"
import Container from "../components/Container"

function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <>
      <Navbar darkMode={darkMode}></Navbar>
      <Layout darkMode={darkMode}>
        <NavbarDummy />
        <br></br>
        <Container>
          <ModeSwitch
            darkMode={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          ></ModeSwitch>
        </Container>
        <Component {...pageProps} darkMode={darkMode} />
        <Footer darkMode={darkMode}></Footer>
      </Layout>
    </>
  )
}

export default MyApp
