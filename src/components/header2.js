import React, { useState } from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import style from './header.module.scss'

import { FaBars, IoMdClose } from 'react-icons/fa'

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
      <div className={style.container}>
        <nav>
          <Link className={style.brand} to="/">
            Br<span>a</span>nd
          </Link>
          <ul>
            {data.dataJson.pages.map(({ slug, title }) => (
              <li>
                <Link to={slug}>{title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
