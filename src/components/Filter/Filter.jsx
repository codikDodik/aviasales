import React from 'react'
import { Checkbox } from 'antd'

import classes from './Filter.module.scss'

const Filter = () => {
  return (
    <>
      <div className={classes.filter}>
        <span className={classes.filter__title}>Количество пересадок</span>
        <ul className={classes.filter__list}>
          <li className={classes.filter__item}>
            <Checkbox type="checkbox" className={classes.filter__chekbox}></Checkbox>
            <span className={classes.filter__title}>Все</span>
          </li>
          <li className={classes.filter__item}>
            <Checkbox type="checkbox" className={classes.filter__chekbox}></Checkbox>
            <span className={classes.filter__title}>Без пересадок</span>
          </li>
          <li className={classes.filter__item}>
            <Checkbox type="checkbox" className={classes.filter__chekbox}></Checkbox>
            <span className={classes.filter__title}>1 пересадка</span>
          </li>
          <li className={classes.filter__item}>
            <Checkbox type="checkbox" className={classes.filter__chekbox}></Checkbox>
            <span className={classes.filter__title}>2 пересадки</span>
          </li>
          <li className={classes.filter__item}>
            <Checkbox type="checkbox" className={classes.filter__chekbox}></Checkbox>
            <span className={classes.filter__title}>3 пересадки</span>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Filter
