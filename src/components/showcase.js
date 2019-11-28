import React from 'react'
import style from './showcase.module.scss'

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
    </div>
  )
}

export default ShowCase
