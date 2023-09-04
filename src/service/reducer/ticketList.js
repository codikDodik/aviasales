/* eslint-disable prettier/prettier */
import { GET_TICKETS } from '../../store/types/types'

const initialState = {
  searchId: '',
  quantityTicketsShow: 5,
  tickets: [],
  activeShowTickets: [],
  stop: false,
  payload: true,
  error: false,
}

export const ticketsReducer = (state = initialState, action) => {
  console.log('ticket reducer', action)
  switch (action.type) {
  case GET_TICKETS: {
    const tickets = action.data.tickets.map(res => {
      return {
        price: res.price,
        carrier: res.carrier,
        segments: res.segments
      }
    })
    return {
      ...state,
      tickets: tickets
    }
  }
  default:
    return state
  }
}
