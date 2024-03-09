import { useState, useEffect } from 'react'
import { getRandomFact } from '../services/facts'

export const useCatFat = () => {
  const [fact, setFact] = useState()

  const refreshFact = () => {
    getRandomFact()
      .then(fact => setFact(fact))
  }

  useEffect(refreshFact, [])

  return { fact, refreshFact }
}
