/* eslint-disable indent */
import {
  ALL_TICKETS,
  WITHOUT_TRANSFER,
  ONE_TRANSFER,
  TWO_TRANSFER,
  THREE_TRANSFER,
  ALL_CHECKED_FILTERS,
  CHECKED_FILTER,
} from '../types/types'

const initialState = [
  {
    id: 1,
    checked: false,
    text: 'Все',
    type: ALL_TICKETS,
  },
  {
    id: 2,
    checked: false,
    quantityStop: 0,
    text: 'Без пересадок',
    type: WITHOUT_TRANSFER,
  },
  {
    id: 3,
    checked: false,
    quantityStop: 1,
    text: '1 пересадка',
    type: ONE_TRANSFER,
  },
  {
    id: 4,
    checked: false,
    quantityStop: 2,
    text: '2 пересадка',
    type: TWO_TRANSFER,
  },
  {
    id: 5,
    checked: false,
    quantityStop: 3,
    text: '3 пересадка',
    type: THREE_TRANSFER,
  },
]

const filterTicketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECKED_FILTER:
      return state.map((checkbox) => {
        if (checkbox.id !== Number(action.id)) return checkbox

        return {
          ...checkbox,
          checked: !checkbox.checked,
        }
      })
    case ALL_CHECKED_FILTERS:
      return state.map((checkbox) => {
        if (state[0].checked) {
          return {
            ...checkbox,
            checked: false,
          }
        }
        return {
          ...checkbox,
          checked: true,
        }
      })
    default:
      return state
  }
}

export { filterTicketsReducer }
