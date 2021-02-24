import Head from "next/head"
import Container from "../components/Container"
import Banner from "../components/Banner"
import TopicPart from "../components/TopicPart"
import Profile from "../components/Profile"
import Blogs from "../components/Blogs"

export default function Home({ darkMode = false }) {
  return (
    <div>
      <Head>
        <title>Tauhoo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner></Banner>
      <Blogs></Blogs>
      <Profile darkMode={darkMode} />
      <Container>
        <TopicPart
          darkMode={darkMode}
          topic="Experience"
          text="I’ll tell you what I have done in my life."
        ></TopicPart>
      </Container>
    </div>
  )
}
