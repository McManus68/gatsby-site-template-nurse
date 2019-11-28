import React from 'react'
import style from './care.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Care = props => {
  console.log('care ', props)
  return (
    <div className={style.card}>
      <div className={style.icon}>
        <FontAwesomeIcon icon={props.icon} />
      </div>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  )
}

export default Care
