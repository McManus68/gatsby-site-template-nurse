import React, { useState } from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import style from './header.module.scss'

import { FaCoins, FaShoppingCart } from 'react-icons/fa'

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      dataJson {
        title
        pages {
          title
          slug
        }
      }
    }
  `)

  const [navOpen, setNavOpen] = useState(0)
  const [hoverIndex, setHoverIndex] = useState(-1)

  return (
    <header>
      <div className={style.logoContainer}>
        <FaCoins />
        <h4 className={style.logo}> Three dot</h4>
      </div>
      <nav>
        <ul className={style.navLinks}>
          {data.dataJson.pages.map(({ slug, title }) => (
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
