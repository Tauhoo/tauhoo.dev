import Document, { Head, Main, NextScript } from "next/document"
import { common, openGraph, twitter } from "../content/header"
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
          <meta name="title" content={common.title} />
          <meta name="description" content={common.description} />
          <meta name="keywords" content={common.keywords} />
          <meta name="robots" content={common.robots} />
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="language" content={common.language} />
          <meta name="author" content={common.author} />
          {/* Facebook */}
          <meta property="og:type" content={openGraph.type} />
          <meta property="og:url" content={openGraph.url} />
          <meta property="og:title" content={openGraph.title} />
          <meta property="og:description" content={openGraph.description} />
          <meta property="og:image" content={openGraph.image} />
          {/* twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content={twitter.url} />
          <meta property="twitter:title" content={twitter.title} />
          <meta property="twitter:description" content={twitter.description} />
          <meta property="twitter:image" content={twitter.image} />
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
