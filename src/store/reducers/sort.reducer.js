/* eslint-disable indent */
import { CHEAPEST, FASTEST, OPTIMAL } from '../types/types'

const sortTicketsReducer = (state = CHEAPEST, action) => {
  switch (action.type) {
    case FASTEST:
      console.log('New state:', FASTEST)
      return FASTEST
    case CHEAPEST:
      console.log('New state:', CHEAPEST)
      return CHEAPEST
    case OPTIMAL:
      console.log('New state:', OPTIMAL)
      return OPTIMAL
    default:
      return state
  }
}

export { sortTicketsReducer }
