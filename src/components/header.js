import React from 'react'
import HeaderItem from './header-item'
import style from './header.module.scss'

import { FaCoins, FaShoppingCart } from 'react-icons/fa'

const Header = props => {
  return (
    <header>
      <div className={style.logoContainer}>
        <FaCoins />
        <h4 className={style.logo}> Three dot</h4>
      </div>
      <nav>
        <ul className={style.navLinks}>
          {props.items.map(({ slug, title }) => (
            <HeaderItem slug={slug} title={title} />
          ))}
        </ul>
      </nav>
      <div className={style.cart}>
        <FaShoppingCart />
      </div>
    </header>
  )
}

export default Header
