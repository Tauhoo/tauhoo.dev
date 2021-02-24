import "../styles/globals.css"
import Navbar from "../components/Navbar"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar darkMode={false}></Navbar>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
