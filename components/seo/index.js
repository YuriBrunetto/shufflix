import React from 'react'
import Head from 'next/head'

const SEO = () => (
  <Head>
    <title>Shufflix</title>
    <link rel='icson' href='/favicon.ico' />
    <link rel='manifest' href='/manifest.json' />
    <meta name='theme-color' content='#706FD3' />
    <meta name='title' content='Shufflix' />
    <meta
      name='description'
      content='Shuffle an episode of your favorite Show'
    />

    <meta property='og:type' content='website' />
    <meta property='og:url' content='https://shufflix.vercel.app/' />
    <meta property='og:title' content='Shufflix' />
    <meta
      property='og:description'
      content='Shuffle an episode of your favorite Show'
    />
    <meta
      property='og:image'
      content='https://shufflix.vercel.app/logo512.png'
    />

    <link
      rel='apple-touch-icon'
      href='https://shufflix.vercel.app/logo512.png'
    />
    <meta name='apple-mobile-web-app-title' content='Shufflix' />

    <meta property='twitter:card' content='summary_large_image' />
    <meta property='twitter:url' content='https://shufflix.vercel.app/' />
    <meta property='twitter:title' content='Shufflix' />
    <meta
      property='twitter:description'
      content='Shuffle an episode of your favorite Show'
    />
    <meta
      property='twitter:image'
      content='https://shufflix.vercel.app/twitter-card.png'
    />
  </Head>
)

export default SEO
