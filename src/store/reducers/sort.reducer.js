/* eslint-disable indent */
import { CHEAPEST, FASTEST, OPTIMAL } from '../types/types'

const sortTicketsReducer = (state = CHEAPEST, action) => {
  switch (action.type) {
    case FASTEST:
      return FASTEST
    case CHEAPEST:
      return CHEAPEST
    case OPTIMAL:
      return OPTIMAL
    default:
      return state
  }
}

export { sortTicketsReducer }
