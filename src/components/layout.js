import React from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import Background from '../components/background'

import '../styles/index.scss'
import style from './layout.module.scss'

const Layout = props => {
  return (
    <div className={style.container}>
      <Header items={props.data.pages} />
      <div className={style.content}>{props.children}</div>
      <Footer data={props.data} />
      <Background />
    </div>
  )
}

export default Layout
