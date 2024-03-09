import { useState, useEffect } from 'react'

export const useCatImage = ({ fact }) => {
  const [imageUrl, setImage] = useState()

  useEffect(() => {
    if (!fact) return

    const firstThreeWords = fact.split(' ').slice(0, 3).join(' ')

    fetch('https://api.thecatapi.com/v1/images/search')
      .then(res => res.json())
      .then(response => {
        const { url } = response[0]
        console.log(url)
        setImage(url)
      })
  }, [fact])

  return { imageUrl }
}
