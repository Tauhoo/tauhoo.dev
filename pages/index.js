import Head from "next/head"
import Banner from "../components/Banner"
import Profile from "../components/Profile"
import Blogs from "../components/Blogs"
import Experience from "../components/Experience"

export default function Home({ darkMode = false }) {
  return (
    <div>
      <Head>
        <title>Tauhoo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner></Banner>
      <div id="blogs"></div>
      <Blogs darkMode={darkMode} />
      <div id="profile"></div>
      <Profile darkMode={darkMode} />
      <div id="experience"></div>
      <Experience darkMode={darkMode} />
      <div id="contact"></div>
    </div>
  )
}
