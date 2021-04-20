import { useState, useEffect, DependencyList } from 'react'
import { getShows } from '../functions/search'
import { ShowModel, SearchResultsPayload } from '../types/index'

export default function useShowSearch(
    query: SearchResultsPayload,
    dependencies: DependencyList | undefined
  ) {
    const [shows, setShows] = useState<ShowModel[]>()
  
    useEffect(() => {
        getShows(query).then((result) => {
          switch (result.tag) {
            case 'Value':
              if (query.SearchTerm) {
                const arr = result.value.map(obj=>obj.show)
              setShows(arr)
              } else {
                setShows(result.value)
              }
              break
            default:
              console.log('Error!')
              break
          }
        })
    }, dependencies)
  
    return shows
  }