/* eslint-disable prettier/prettier */
import { GET_TICKETS, GET_MORE_TICKETS, ERROR_DISPLAY_ON, ERROR_DISPLAY_OFF } from '../../store/types/types'

const initialState = {
  searchId: '',
  quantityTicketsShow: 5,
  tickets: [],
  activeShowTickets: [],
  stop: false,
  payload: true,
  error: null,
}

export const ticketsReducer = (state = initialState, action) => {
  switch (action.type) {
  
  case GET_MORE_TICKETS: {
    const newQuantityTicketsShow = state.quantityTicketsShow + 5
    return {
      ...state,
      quantityTicketsShow: newQuantityTicketsShow,
    }
  }
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
  case ERROR_DISPLAY_ON: {
    return {
      ...state,
      error: action.text
    }
  }

  case ERROR_DISPLAY_OFF: {
    return {
      ...state,
      error: false
    }
  }
  default:
    return state
  }
}
