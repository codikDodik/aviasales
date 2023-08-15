import React from 'react'

import Logo from '../Logo'
import Filter from '../Filter'
import SortTickets from '../SortTickets'
import ListTickets from '../ListTickets'

import classes from './App.module.scss'

console.log(classes)

function App() {
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
          <button type="button" className={classes.App__button}>
            Показать еще 5 билетов!
          </button>
        </div>
      </main>
    </div>
  )
}

export default App
