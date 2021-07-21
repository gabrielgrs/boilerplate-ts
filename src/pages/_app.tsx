import { Fragment } from 'react'

import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import Head from 'next/head'
import { DefaultSeo as NextSEO } from 'next-seo'
import seoConfigs from 'configs/seo'

import * as theme from 'styles/theme'
import GlobalStyles from 'styles/Globals'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>Boilerplate TS</title>
        <meta name="description" content="Boilerplate TS" />
      </Head>
      <NextSEO {...seoConfigs} />
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </Fragment>
  )
}

export default MyApp
