import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

const SEO = () => (
  <Head>
    <title>{'Shufflix'}</title>
    <link rel='icson' href='/favicon.ico' />
    <link rel='manifest' href='/manifest.json' />
    <meta name='theme-color' content='#706FD3' />
    <meta name='title' content='Shufflix' />
    <meta
      name='description'
      content='Shuffle an episode of your favorte Show'
    />

    <meta property='og:type' content='website' />
    {/* <meta
      property='og:url'
      content={url ? url : 'https://yuribrunetto.com.br/'}
    /> */}
    <meta property='og:title' content='Shufflix' />
    <meta
      property='og:description'
      content='Shuffle an episode of your favorte Show'
    />
    {/* <meta
      property='og:image'
      content='https://yuribrunetto.com.br/logo512.png'
    /> */}

    {/* <meta property='twitter:card' content='summary_large_image' /> */}
    {/* <meta
      property='twitter:url'
      content={url ? url : 'https://yuribrunetto.com.br/'}
    /> */}
    <meta property='twitter:title' content={'Shufflix'} />
    <meta
      property='twitter:description'
      content='Shuffle an episode of your favorte Show'
    />
    {/* <meta
      property='twitter:image'
      content='https://yuribrunetto.com.br/twitter-card.png'
    /> */}
  </Head>
)

export default SEO
