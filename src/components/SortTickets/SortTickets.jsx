import React from 'react'

import classes from './SortTickets.module.scss'

const SortTickets = () => {
  return (
    <>
      <div className={classes.sortTickets}>
        <ul className={classes.sortTickets__list}>
          <li className={classes.sortTickets__item}>
            <button type="button" className={classes.sortTickets__button}>
              Самый дешевый
            </button>
          </li>
          <li className={classes.sortTickets__item}>
            <button type="button" className={classes.sortTickets__button}>
              Самый быстрый
            </button>
          </li>
          <li className={classes.sortTickets__item}>
            <button type="button" className={classes.sortTickets__button}>
              Оптимальный
            </button>
          </li>
        </ul>
      </div>
    </>
  )
}

export default SortTickets
