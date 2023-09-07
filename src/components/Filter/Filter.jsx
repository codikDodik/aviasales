/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { allCheckedFilterAction, checkedFilterAction } from '../../store/actions/filter.action'

import classes from './Filter.module.scss'

const Filter = () => {
  const dispatch = useDispatch()
  const filter = useSelector((state) => state.filter)

  useEffect(() => {
    const filtersArr = filter.filter((element) => {
      if (element.id !== 1 && !element.checked) {
        return element
      }
    })
    if (!filtersArr.length) {
      if (!filter[0].checked) {
        dispatch(checkedFilterAction(filter[0].id))
      }
    }
  }, [dispatch, filter])

  const changeFilter = (id) => {
    if (id === filter[0].id) {
      dispatch(allCheckedFilterAction())
    } else {
      if (filter[0].checked) {
        dispatch(checkedFilterAction(filter[0].id))
      }
      dispatch(checkedFilterAction(id))
    }
  }
  const handleCheckboxChange = (id) => {
    changeFilter(id)
  }

  return (
    <div className={classes.filter}>
      <span className={classes.filter__title}>Количество пересадок</span>
      <ul className={classes.filter__list}>
        {filter.map(({ id, checked, text, type, quantityStop }) => (
          <li key={id} className={classes.filter__item} onClick={() => changeFilter(id)}>
            <label className={classes.filter__label}>
              <input
                id={id}
                type="checkbox"
                checked={checked}
                data-type={type}
                data-quantitystop={quantityStop}
                className={classes.filter__checkbox}
                onChange={() => handleCheckboxChange(id)}
              />
            </label>
            <span className={classes.filter__text}>{text}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Filter
