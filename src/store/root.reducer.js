import { combineReducers } from 'redux'

import { sortTicketsReducer } from './reducers/sort.reducer'
import { filterTicketsReducer } from './reducers/filter.reducer'

const rootReducer = combineReducers({
  sortTicketsReducer,
  filter: filterTicketsReducer,
})

export default rootReducer
