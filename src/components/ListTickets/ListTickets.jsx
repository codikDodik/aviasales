import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getTicketsWithKey } from '../../service/asyncAction/getTickets'
import TicketCards from '../TicketCards'

import classes from './ListTickets.module.scss'

const ListTickets = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTicketsWithKey())
  }, [])
  const tickets = useSelector((state) => {
    const { ticketsReducer } = state
    return ticketsReducer.tickets
  })

  const firstFiveTickets = tickets.slice(0, 5)

  console.log('первые 5 тикетов', firstFiveTickets)
  return (
    <>
      <div className={classes.ListTickets}>
        {tickets.map((data, index) => {
          // Ограничиваем количество отображаемых билетов до 5
          if (index < 5) {
            return <TicketCards key={index} data={data} />
          }
          return null // Игнорируем билеты, которые выходят за пределы первых 5
        })}
      </div>
    </>
  )
}

export default ListTickets
