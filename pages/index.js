import Head from "next/head"
import Container from "../components/Container"
import Text from "../components/Text"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Text>ice is the best ไอซ์</Text>
        <Text bold highlight>
          ice is the best ไอซ์
        </Text>
      </Container>
    </div>
  )
}
