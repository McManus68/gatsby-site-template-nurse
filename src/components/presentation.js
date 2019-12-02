import React from 'react'
import style from './presentation.module.scss'
import Radium from 'radium'

const Presentation = props => {
  console.log('img ', props.data.image)

  const divStyle = {
    backgroundImage: `url('./images/${props.data.image} ')`,
  }

  return (
    <section className={style.container}>
      <div className={style.presentation} style={divStyle}>
        <h1>{props.data.pres1} </h1>
        <p>{props.data.pres2}</p>
      </div>
    </section>
  )
}

export default Radium(Presentation)
