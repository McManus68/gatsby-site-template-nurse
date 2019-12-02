import React from 'react'
import style from './contact.module.scss'
import Title from './title'

const Contact = props => {
  return (
    <section className={style.container}>
      <Title title="Contact" />
      <div className={style.contact}>
        <div className={style.imageContainer}></div>
        <div className={style.formContainer}>
          <input
            type="text"
            className={style.field}
            placeholder="Votre nom..."
          />
          <input
            type="email"
            className={style.field}
            placeholder="Votre email..."
          />
          <input
            type="text"
            className={style.field}
            placeholder="Votre téléphone..."
          />
          <textarea
            className={style.field + ' ' + style.area}
            placeholder="Message..."
          />
          <button className={style.btn}>Envoyer</button>
        </div>
      </div>
    </section>
  )
}

export default Contact
