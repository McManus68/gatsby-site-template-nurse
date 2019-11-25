import React from 'react'
import { Link } from 'gatsby'
import style from './header-item.module.scss'

const HeaderItem = props => {
  return (
    <li className={style.headerItem}>
      <Link to={props.slug}>{props.title}</Link>
    </li>
  )
}

export default HeaderItem
