import { GET_TICKETS, SEARCH_ID } from '../../store/types/types'

export const searchID = (key) => ({
  type: SEARCH_ID,
  key,
})

export function getKey() {
  return async (dispatch) => {
    try {
      const response = await fetch('https://aviasales-test-api.kata.academy/search')
      const jsonKey = await response.json()
      dispatch(searchID(jsonKey))
      return jsonKey.searchId
    } catch (error) {
      console.error(error)
    }
  }
}

export function getTicketsWithKey() {
  return async (dispatch) => {
    try {
      const searchId = await dispatch(getKey())
      const response = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`)
      const jsonData = await response.json()
      dispatch({
        type: GET_TICKETS,
        data: jsonData,
      })
      console.log(jsonData)
    } catch (error) {
      console.error(error)
    }
  }
}
