import "../styles/globals.css"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Layout from "../components/Layout"
import NavbarDummy from "../components/NavbarDummy"
import ModeSwitch from "../components/ModeSwitch"
import Container from "../components/Container"
import localVariable from "../utils/localVariable"
import GlobalStyle from "../components/GlobalStyle"
import { useEffect, useState } from "react"

function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const localDarkMode = localVariable.getBoolean("darkMode")
    setDarkMode(typeof localDarkMode === "boolean" ? localDarkMode : false)
  }, [])

  const onChangeDarkMode = () => {
    const newDarkMode = !darkMode
    localVariable.set("darkMode", newDarkMode)
    setDarkMode(newDarkMode)
  }

  return (
    <>
      <GlobalStyle darkMode={darkMode} />
      <Navbar darkMode={darkMode}></Navbar>
      <Layout darkMode={darkMode}>
        <NavbarDummy />
        <br></br>
        <Container
          containerStyle={{ display: "flex", justifyContent: "flex-end" }}
        >
          <ModeSwitch
            darkMode={darkMode}
            onChange={onChangeDarkMode}
          ></ModeSwitch>
        </Container>
        <Component {...pageProps} darkMode={darkMode} />
        <Footer darkMode={darkMode}></Footer>
      </Layout>
    </>
  )
}

export default MyApp
