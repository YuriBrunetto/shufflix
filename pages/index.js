import React, { useState } from 'react'

import Layout from '@/components/layout'
import Field from '@/components/field'
import Button from '@/components/button'
import SEO from '@/components/seo'

import { ResultStyled } from '@/styles/home'

export default function Home() {
  const [numberSeasons, setNumberSeasons] = useState(0)
  const [numberEpisodes, setNumberEpisodes] = useState(0)
  const [result, setResult] = useState(null)

  const getRandomInt = (max) => {
    const min = 0
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min + 1
  }

  const handleShuffleClick = () => {
    const randomSeason = getRandomInt(numberSeasons)
    const randomEpisode = getRandomInt(numberEpisodes)

    setResult(`S${randomSeason}xE${randomEpisode}`)
  }

  const handleReshuffleClick = () => {
    setResult(null)
  }

  return (
    <Layout>
      <SEO />

      {!result ? (
        <>
          <Field
            title='Number of seasons'
            value={numberSeasons}
            onChange={setNumberSeasons}
          />
          <Field
            title='Number of episodes'
            value={numberEpisodes}
            onChange={setNumberEpisodes}
          />

          <Button title='shuffle!' height={56} onClick={handleShuffleClick} />
        </>
      ) : (
        <>
          <ResultStyled>{result}</ResultStyled>
          <Button
            title='shuffle again'
            height={48}
            onClick={handleReshuffleClick}
          />
        </>
      )}
    </Layout>
  )
}
