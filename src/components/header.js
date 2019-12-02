import React from 'react'
import HeaderItem from './header-item'
import style from './header.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = props => {
  return (
    <header>
      <div className={style.logoContainer}>
        <FontAwesomeIcon icon="user-md" />
      </div>
      <nav>
        <ul className={style.navContainer}>
          {props.items.map(({ slug, title }) => (
            <HeaderItem slug={slug} title={title} />
          ))}
        </ul>
      </nav>
      <div className={style.phoneContainer}>
        <FontAwesomeIcon icon="phone" />
        <h4>06.21.28.12.18</h4>
      </div>
    </header>
  )
}

export default Header
