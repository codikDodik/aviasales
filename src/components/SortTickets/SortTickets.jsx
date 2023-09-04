import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { actionActiveButton } from '../../store/actions/sort.action'
import { FASTEST, CHEAPEST, OPTIMAL } from '../../store/types/types'

import classes from './SortTickets.module.scss'

const SortTickets = () => {
  const dispatch = useDispatch()
  const sortButton = useSelector((state) => state.sortTicketsReducer)
  return (
    <div className={classes.sortTickets}>
      <ul className={classes.sortTickets__list}>
        <li className={classes.sortTickets__item}>
          <button
            onClick={() => {
              dispatch(actionActiveButton(CHEAPEST))
            }}
            type="button"
            className={`${classes.sortTickets__button} ${sortButton === CHEAPEST ? classes.sortTickets__checked : ''}`}
          >
            Самый дешевый
          </button>
        </li>
        <li className={classes.sortTickets__item}>
          <button
            onClick={() => {
              dispatch(actionActiveButton(FASTEST))
            }}
            type="button"
            className={`${classes.sortTickets__button} ${sortButton === FASTEST ? classes.sortTickets__checked : ''}`}
          >
            Самый быстрый
          </button>
        </li>
        <li className={classes.sortTickets__item}>
          <button
            onClick={() => {
              dispatch(actionActiveButton(OPTIMAL))
            }}
            type="button"
            className={`${classes.sortTickets__button} ${sortButton === OPTIMAL ? classes.sortTickets__checked : ''}`}
          >
            Оптимальный
          </button>
        </li>
      </ul>
    </div>
  )
}

export default SortTickets
