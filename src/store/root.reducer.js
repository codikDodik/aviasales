import { combineReducers } from 'redux'

import { ticketsReducer } from '../service/reducer/ticketList'

import { sortTicketsReducer } from './reducers/sort.reducer'
import { filterTicketsReducer } from './reducers/filter.reducer'

const rootReducer = combineReducers({
  sortTicketsReducer,
  filter: filterTicketsReducer,
  ticketsReducer,
})

export default rootReducer
