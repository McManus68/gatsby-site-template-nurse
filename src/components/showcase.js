import React from 'react'
import style from './showcase.module.scss'
import deviceImg from '../images/m.png'
import bigCircle from '../images/big-eclipse.svg'
import mediumCircle from '../images/mid-eclipse.svg'
import smallCircle from '../images/small-eclipse.svg'
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
            <h1>
              Robert Durand, Infirmier libéral à domicile sur le secteur de
              Montpellier
            </h1>
            <p>16 années d'expérience dans le domaine soin aux personnes</p>
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

      <img className={style.bigCircle} src={bigCircle} alt="" />
      <img className={style.mediumCircle} src={mediumCircle} alt="" />
      <img className={style.smallCircle} src={smallCircle} alt="" />
    </div>
  )
}

export default ShowCase
