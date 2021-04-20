import { getEpisodes } from '../functions/episodes'
import { useEffect, useState } from 'react'
import { ParsedUrlQuery } from 'querystring'
import { EpisodeModel } from '../types'

export default function useShowEpisodes(query: ParsedUrlQuery) {
  const [episodes, setData] = useState<EpisodeModel[]>()
  const [isLoadingEpisodes, setIsLoading] = useState<boolean>(true)
  
  
  useEffect(() => {
    const { serie } = query
    if (serie && typeof serie === 'string') {
        getEpisodes(serie)
        .then((result) => {
          switch (result.tag) {
            case 'Value':
              setData(result.value)
              break
            default:
              console.log('Error!')
              break
          }
        })
        .then(() => setIsLoading(false))
    }
  }, [query])

  return { episodes, isLoadingEpisodes }
}