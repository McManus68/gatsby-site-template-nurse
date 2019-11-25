import React from 'react'
import style from './showcase.module.scss'
import deviceImg from '../images/m.png'
import leftArrow from '../images/arrow-left.svg'
import rightArrow from '../images/arrow-right.svg'
import dot from '../images/dot.svg'
import dotFull from '../images/dot-full.svg'

const ShowCase = props => {
  console.log('showCase ', props)
  return (
    <div>
      <section className={style.presentation}>
        <div className={style.introduction}>
          <div className={style.introText}>
            <h1>{props.data.dataJson.pres1} </h1>
            <p>{props.data.dataJson.pres2}</p>
          </div>
          <div className={style.cta}>
            <button className={style.ctaSelect}>Horaires</button>
            <button className={style.ctaAdd}>Me contacter</button>
          </div>
        </div>
        <div className={style.cover}>
          <img src={deviceImg} alt="" />
        </div>
      </section>

      <div className={style.laptopSelect}>
        <img src={leftArrow} alt="" />
        <img src={dot} alt="" />
        <img src={dotFull} alt="" />
        <img src={dotFull} alt="" />
        <img src={rightArrow} alt="" />
      </div>
    </div>
  )
}

export default ShowCase
