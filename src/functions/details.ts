import { ShowModel, BackendError, ObjectResult } from '../types/index'
import { singleShow, headers } from '../constants/config'

export async function getDetails(
    payload: string
  ): Promise<ObjectResult<ShowModel, BackendError>> {
    try {
      const response = await fetch(singleShow(payload), {
        headers: headers,
        method: 'GET',
      })
  
      const body: ShowModel = await response.json()
  
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