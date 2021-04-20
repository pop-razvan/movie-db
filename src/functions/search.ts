import { SearchResultsPayload, ShowModel, BackendError, ArrayResult } from '../types/index'
import { showsBasedOnTerm, allShows, headers } from '../constants/config'

export async function getShows(
    payload?: SearchResultsPayload
  ): Promise<ArrayResult<ShowModel, BackendError>> {
    try {
      const response = await fetch(payload?.SearchTerm ? showsBasedOnTerm(payload.SearchTerm) : allShows(), {
        headers: headers,
        method: 'GET',
      })

        const body: ShowModel[] = await response.json()
  
      return {
        tag: 'Value',
        value: body,
      }
    } catch (e) {
      return {
        tag: 'Error',
        error: {
          message: e.message || 'Server request error',
          code: e.statusCode,
        },
      }
    }
  }