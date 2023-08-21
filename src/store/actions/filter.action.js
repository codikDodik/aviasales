export const CHECKED_FILTER = 'CHECKED_FILTER'
export const ALL_CHECKED_FILTERS = 'ALL_CHECKED_FILTERS'

export const checkedFilterAction = (id) => {
  return {
    type: CHECKED_FILTER,
    id,
  }
}

export const allCheckedFilterAction = () => {
  return {
    type: ALL_CHECKED_FILTERS,
  }
}
