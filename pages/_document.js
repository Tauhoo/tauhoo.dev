import Document, { Head, Main, NextScript } from "next/document"
// Import styled components ServerStyleSheet
import { ServerStyleSheet } from "styled-components"

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet()

    // Step 2: Retrieve styles from components in the page
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    )

    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement()

    // Step 4: Pass styleTags as a prop
    return { ...page, styleTags }
  }

  render() {
    return (
      <html>
        <Head>
          <meta name="title" content="Tauhoo" />
          <meta
            name="description"
            content="A web blogs that provide my article about what  I'm interested in and my profile. You can enjoy it. 😎 "
          />
          <meta
            name="keywords"
            content="blogs, technology, profile, Tauhoo, Wachirawit, Wacharak, computer, articles"
          />
          <meta name="robots" content="index, follow" />
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="language" content="English" />
          <meta name="author" content="Wachirawit Wacharak" />
          {/* Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://tauhoo.netlify.app/" />
          <meta property="og:title" content="Tauhoo" />
          <meta
            property="og:description"
            content="A web blogs that provide my article about what  I'm interested in and my profile. Let's enjoy it. 😎"
          />
          <meta
            property="og:image"
            content="https://tauhoo.netlify.app/cover.png"
          />
          {/* twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://tauhoo.netlify.app/" />
          <meta property="twitter:title" content="Tauhoo" />
          <meta
            property="twitter:description"
            content="A web blogs that provide my article about what  I'm interested in and my profile. Let's enjoy it. 😎"
          />
          <meta
            property="twitter:image"
            content="https://tauhoo.netlify.app/cover.png"
          />
          {this.props.styleTags}
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
