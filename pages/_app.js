import "../styles/globals.css"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Layout from "../components/Layout"
import NavbarDummy from "../components/NavbarDummy"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar darkMode={false}></Navbar>
      <Layout>
        <NavbarDummy />
        <Component {...pageProps} />
        <Footer darkMode={false}></Footer>
      </Layout>
    </>
  )
}

export default MyApp
