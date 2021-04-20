import { getDetails } from '../functions/details'
import { useEffect, useState } from 'react'
import { ParsedUrlQuery } from 'querystring'
import { ShowModel } from '../types'

export default function useSerieDetails(query: ParsedUrlQuery) {
  const [data, setData] = useState<ShowModel>()
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const { serie } = query
    if (serie && typeof serie === 'string') {
      getDetails(serie)
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

  return { data, isLoading }
}