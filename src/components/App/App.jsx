import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Logo from '../Logo'
import Filter from '../Filter'
import SortTickets from '../SortTickets'
import ListTickets from '../ListTickets'
import { showMoreTickets } from '../../service/asyncAction/getTickets'

import classes from './App.module.scss'

function App() {
  const error = useSelector((state) => state.ticketsReducer.error)
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(showMoreTickets())
  }
  return (
    <div className={classes.App}>
      <header className={classes.App__header}>
        <Logo />
      </header>
      <main className={classes.App__main}>
        <Filter />
        <div className={classes.App__wrapper}>
          <SortTickets />
          <ListTickets />
          {error && <div className={classes.error__message}>{error}</div>}
          <button type="button" className={classes.App__button} onClick={handleClick}>
            Показать еще 5 билетов!
          </button>
        </div>
      </main>
    </div>
  )
}

export default App
