import React from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import Background from '../components/background'

import '../styles/index.scss'
import layoutStyles from './layout.module.scss'

const Layout = props => {
  console.log('layout', props)
  return (
    <div className={layoutStyles.container}>
      <Header items={props.data.pages} />
      <div className={layoutStyles.content}>{props.children}</div>
      <Footer data={props.data} />
      <Background />
    </div>
  )
}

export default Layout
