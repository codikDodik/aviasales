import React from 'react'

import image from '../../assets/img/S7 Logo.svg'

import classes from './TicketCards.module.scss'

const TicketCards = () => {
  return (
    <>
      <div className={classes.TicketCards}>
        <div className={classes.TicketCards__item}>
          <div className={classes.TicketCards__header}>
            <span className={classes.TicketCards__price}>13 400 Р</span>
            <img className={classes.TicketCards__image} src={image} alt="S7" />
          </div>
          <div className={classes.TicketCards__mainContent}>
            <table className={classes.TicketCards__table}>
              <thead className={classes.TicketCards__thead}>
                <tr className={classes.TicketCards__tr}>
                  <th className={classes.TicketCards__th}>MOW – HKT</th>
                  <th className={classes.TicketCards__th}>В пути</th>
                  <th className={classes.TicketCards__th}>2 пересадки</th>
                </tr>
              </thead>
              <tbody className={classes.TicketCards__tbody}>
                <tr className={classes.TicketCards__tr}>
                  <th className={classes.TicketCards__th}>10:45 – 08:00</th>
                  <th className={classes.TicketCards__th}>21ч 15м</th>
                  <th className={classes.TicketCards__th}>HKG, JNB</th>
                </tr>
              </tbody>
            </table>
            <table className={classes.TicketCards__table}>
              <thead className={classes.TicketCards__thead}>
                <tr className={classes.TicketCards__tr}>
                  <th className={classes.TicketCards__th}>MOW – HKT</th>
                  <th className={classes.TicketCards__th}>В пути</th>
                  <th className={classes.TicketCards__th}>1 пересадка</th>
                </tr>
              </thead>
              <tbody className={classes.TicketCards__tbody}>
                <tr className={classes.TicketCards__tr}>
                  <th className={classes.TicketCards__th}>11:20 – 00:50</th>
                  <th className={classes.TicketCards__th}>13ч 30м</th>
                  <th className={classes.TicketCards__th}>HKG</th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className={classes.TicketCards__item}>
          <div className={classes.TicketCards__header}>
            <span className={classes.TicketCards__price}>13 400 Р</span>
            <img className={classes.TicketCards__image} src={image} alt="S7" />
          </div>
          <div className={classes.TicketCards__mainContent}>
            <table className={classes.TicketCards__table}>
              <thead className={classes.TicketCards__thead}>
                <tr className={classes.TicketCards__tr}>
                  <th className={classes.TicketCards__th}>MOW – HKT</th>
                  <th className={classes.TicketCards__th}>В пути</th>
                  <th className={classes.TicketCards__th}>2 пересадки</th>
                </tr>
              </thead>
              <tbody className={classes.TicketCards__tbody}>
                <tr className={classes.TicketCards__tr}>
                  <th className={classes.TicketCards__th}>10:45 – 08:00</th>
                  <th className={classes.TicketCards__th}>21ч 15м</th>
                  <th className={classes.TicketCards__th}>HKG, JNB</th>
                </tr>
              </tbody>
            </table>
            <table className={classes.TicketCards__table}>
              <thead className={classes.TicketCards__thead}>
                <tr className={classes.TicketCards__tr}>
                  <th className={classes.TicketCards__th}>MOW – HKT</th>
                  <th className={classes.TicketCards__th}>В пути</th>
                  <th className={classes.TicketCards__th}>1 пересадка</th>
                </tr>
              </thead>
              <tbody className={classes.TicketCards__tbody}>
                <tr className={classes.TicketCards__tr}>
                  <th className={classes.TicketCards__th}>11:20 – 00:50</th>
                  <th className={classes.TicketCards__th}>13ч 30м</th>
                  <th className={classes.TicketCards__th}>HKG</th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default TicketCards
