import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getTicketsWithKey } from '../../service/asyncAction/getTickets'
import TicketCards from '../TicketCards'

import classes from './ListTickets.module.scss'

const filterTicketsByTransferType = (tickets, selectedType) => {
  return tickets.filter((ticket) => {
    const stopsSegment0 = ticket.segments[0].stops.length
    const stopsSegment1 = ticket.segments[1].stops.length

    if (selectedType === 'ONE_TRANSFER') {
      return stopsSegment0 === 1 && stopsSegment1 === 1
    } else if (selectedType === 'TWO_TRANSFER') {
      return stopsSegment0 === 2 && stopsSegment1 === 2
    } else if (selectedType === 'THREE_TRANSFER') {
      return stopsSegment0 === 3 && stopsSegment1 === 3
    } else if (selectedType === 'WITHOUT_TRANSFER') {
      return stopsSegment0 === 0 && stopsSegment1 === 0
    }
    return true
  })
}

const sortTicketsByPrice = (tickets) => {
  return [...tickets].sort((a, b) => a.price - b.price)
}

const sumSegmentDurations = (ticket) => {
  const firstSegmentDuration = ticket.segments[0].duration
  const secondSegmentDuration = ticket.segments[1].duration
  return firstSegmentDuration + secondSegmentDuration
}

const sortTicketsBySumDuration = (tickets) => {
  return [...tickets].sort((a, b) => {
    const sumA = sumSegmentDurations(a)
    const sumB = sumSegmentDurations(b)
    return sumA - sumB
  })
}

const getTypeBasedOnChecked = (filter) => {
  const checkedItem = filter.find((item) => item.checked === true)
  return checkedItem ? checkedItem.type : null
}

const ListTickets = () => {
  const filter = useSelector((state) => state.filter)
  const selectedType = getTypeBasedOnChecked(filter)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTicketsWithKey())
  }, [])

  const sortOption = useSelector((state) => {
    return state.sortTicketsReducer
  })

  const tickets = useSelector((state) => {
    const { ticketsReducer } = state
    return ticketsReducer.tickets
  })

  const moreTickets = useSelector((state) => {
    return state.ticketsReducer.quantityTicketsShow
  })

  let sortedTickets = [...tickets]

  if (sortOption === 'CHEAPEST') {
    sortedTickets = sortTicketsByPrice(sortedTickets)
  }

  if (sortOption === 'FASTEST') {
    sortedTickets = sortTicketsBySumDuration(sortedTickets)
  }

  const filteredTickets = filterTicketsByTransferType(sortedTickets, selectedType)
  return (
    <>
      <div className={classes.ListTickets}>
        {filteredTickets.map((data, index) => {
          if (index < moreTickets) {
            return <TicketCards key={index} data={data} />
          }
          return null
        })}
      </div>
    </>
  )
}

export default ListTickets
