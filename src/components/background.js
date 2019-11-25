import React from 'react'

import bigCircle from '../images/big-eclipse.svg'
import mediumCircle from '../images/mid-eclipse.svg'
import smallCircle from '../images/small-eclipse.svg'
import style from './background.module.scss'

const Background = () => {
  return (
    <div>
      <img className={style.bigCircle} src={bigCircle} alt="" />
      <img className={style.mediumCircle} src={mediumCircle} alt="" />
      <img className={style.smallCircle} src={smallCircle} alt="" />
    </div>
  )
}

export default Background
