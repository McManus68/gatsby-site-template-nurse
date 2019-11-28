import React from 'react'
import Care from './care'
import Title from './title'

import style from './cares.module.scss'

const Cares = props => {
  return (
    <section className={style.container}>
      <Title title="Nos services" />
      <div className={style.cares}>
        {props.data.cares.map(({ title, icon, description }) => (
          <Care title={title} icon={icon} description={description} />
        ))}
      </div>
    </section>
  )
}

export default Cares
