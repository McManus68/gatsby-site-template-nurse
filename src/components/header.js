import React from 'react'
import { Link } from 'gatsby'
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
            <li>
              <Link className={style.navLink} to={slug}>
                {title}
              </Link>
            </li>
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
