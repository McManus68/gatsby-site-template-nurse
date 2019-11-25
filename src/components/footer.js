import React from 'react'

import style from './footer.module.scss'

const Footer = props => {
  return (
    <footer className={style.footer}>
      <div className={style.owner}>
        <p>Created by {props.data.owner}, © 2019</p>
      </div>
      <div className={style.legalNotice}>
        <p>{props.data.legalNotice}</p>
      </div>
    </footer>
  )
}

export default Footer
