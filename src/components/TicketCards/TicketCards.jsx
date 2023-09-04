// import image from '../../assets/img/S7 Logo.svg'

import classes from './TicketCards.module.scss'

function formatDateTime(dateTimeStr) {
  const date = new Date(dateTimeStr)
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const formattedTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes}`
  return formattedTime
}

function formatDuration(durationInMinutes) {
  const hours = Math.floor(durationInMinutes / 60)
  const minutes = durationInMinutes % 60
  return `${hours}ч ${minutes}м`
}

function calculateArrivalTime(departureTime, duration) {
  const [depHours, depMinutes] = departureTime.split(':').map(Number)
  const [durHours, durMinutes] = duration.match(/\d+/g).map(Number)

  let arrivalHours = depHours + durHours
  let arrivalMinutes = depMinutes + durMinutes

  if (arrivalMinutes >= 60) {
    arrivalHours += Math.floor(arrivalMinutes / 60)
    arrivalMinutes %= 60
  }
  arrivalHours %= 24

  const formattedArrivalTime = `${arrivalHours}:${arrivalMinutes < 10 ? '0' : ''}${arrivalMinutes}`
  return formattedArrivalTime
}

const TicketCards = ({ data }) => {
  const { price, carrier, segments } = data
  const firstSegment = segments[0]
  const secondSegment = segments[1]

  const formattedDate = formatDateTime(firstSegment.date)
  const formattedDuration = formatDuration(firstSegment.duration)

  const formattedDateSecond = formatDateTime(secondSegment.date)
  const formattedDurationSecond = formatDuration(secondSegment.duration)

  const arrivalTime = calculateArrivalTime(formattedDate, formattedDuration)
  const arrivalTimeSecond = calculateArrivalTime(formattedDateSecond, formattedDurationSecond)
  console.log(formattedDate, formattedDuration)
  const firstTable = (
    <table className={classes.TicketCards__table}>
      <thead className={classes.TicketCards__thead}>
        <tr className={classes.TicketCards__tr}>
          <th className={classes.TicketCards__th}>
            {firstSegment.origin} – {firstSegment.destination}
          </th>
          <th className={classes.TicketCards__th}>В пути</th>
          <th className={classes.TicketCards__th}>{firstSegment.stops.length} пересадки</th>
        </tr>
      </thead>
      <tbody className={classes.TicketCards__tbody}>
        <tr className={classes.TicketCards__tr}>
          <th className={classes.TicketCards__th}>
            {formattedDate} – {arrivalTime}
          </th>
          <th className={classes.TicketCards__th}>{formattedDuration}</th>
          <th className={classes.TicketCards__th}>{firstSegment.stops.join(', ')}</th>
        </tr>
      </tbody>
    </table>
  )
  const secondTable = (
    <table className={classes.TicketCards__table}>
      <thead className={classes.TicketCards__thead}>
        <tr className={classes.TicketCards__tr}>
          <th className={classes.TicketCards__th}>
            {secondSegment.origin} – {secondSegment.destination}
          </th>
          <th className={classes.TicketCards__th}>В пути</th>
          <th className={classes.TicketCards__th}>{secondSegment.stops.length} пересадки</th>
        </tr>
      </thead>
      <tbody className={classes.TicketCards__tbody}>
        <tr className={classes.TicketCards__tr}>
          <th className={classes.TicketCards__th}>
            {formattedDateSecond} – {arrivalTimeSecond}
          </th>
          <th className={classes.TicketCards__th}>{formattedDurationSecond}</th>
          <th className={classes.TicketCards__th}>{secondSegment.stops.join(', ')}</th>
        </tr>
      </tbody>
    </table>
  )
  return (
    <>
      <div className={classes.TicketCards}>
        <div className={classes.TicketCards__item}>
          <div className={classes.TicketCards__header}>
            <span className={classes.TicketCards__price}>{price} Р</span>
            <span className={classes.TicketCards__image}> {carrier} </span>
          </div>
          <div className={classes.TicketCards__mainContent}>
            {firstTable}
            {secondTable}
          </div>
        </div>
      </div>
    </>
  )
}

export default TicketCards
