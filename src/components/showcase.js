import React from 'react'
import style from './showcase.module.scss'
import leftArrow from '../assets/images/arrow-left.svg'
import rightArrow from '../assets/images/arrow-right.svg'
import dot from '../assets/images/dot.svg'
import dotFull from '../assets/images/dot-full.svg'

const ShowCase = props => {
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
          <img src={`../images/${props.data.dataJson.image}`} alt="" />
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
