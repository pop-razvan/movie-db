import { EpisodeModel, BackendError, ArrayResult } from '../types/index'
import { showEpisodes, headers } from '../constants/config'

export async function getEpisodes(
    payload: string
  ): Promise<ArrayResult<EpisodeModel, BackendError>> {
    try {
      const response = await fetch(showEpisodes(payload), {
        headers: headers,
        method: 'GET',
      })
  
      const body: EpisodeModel[] = await response.json()
  
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