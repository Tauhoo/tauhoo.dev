import Head from "next/head"
import Container from "../components/Container"
import Text from "../components/Text"
import Topic from "../components/Topic"
import Banner from "../components/Banner"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tauhoo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner></Banner>
      <Container>
        <Text>ice is the best ไอซ์</Text>
        <Text bold highlight>
          ice is the best ไอซ์
        </Text>
        <Topic level={0}>Wellcome</Topic>
      </Container>
    </div>
  )
}
