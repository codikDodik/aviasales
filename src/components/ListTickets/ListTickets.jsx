import React from 'react'

import TicketCards from '../TicketCards'

import classes from './ListTickets.module.scss'

const ListTickets = () => {
  return (
    <>
      <div className={classes.ListTickets}>
        <TicketCards />
      </div>
    </>
  )
}

export default ListTickets
