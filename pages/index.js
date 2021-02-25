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
      <Blogs darkMode={darkMode} />
      <Profile darkMode={darkMode} />
      <Experience darkMode={darkMode} />
    </div>
  )
}
