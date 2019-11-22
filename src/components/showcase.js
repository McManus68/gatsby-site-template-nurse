import React from 'react'
import style from './showcase.module.scss'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

const ShowCase = props => {
  console.log('caca ', props)
  return (
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
        <Img fluid={props.img} alt="" />
      </div>
    </section>
  )
}

export default ShowCase
