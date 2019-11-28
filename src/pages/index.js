import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'
import ShowCase from '../components/showcase'
import Cares from '../components/cares'
import Contact from '../components/contact'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

export const query = graphql`
  query {
    dataJson(id: { eq: "1" }) {
      ...siteFields
    }
  }
`
const IndexPage = props => {
  console.log(props)
  return (
    <Layout data={props.data.dataJson}>
      <Head title={props.data.dataJson.title} />
      <ShowCase data={props.data} />
      <Cares data={props.data.dataJson} />
      <Contact />
    </Layout>
  )
}

export default IndexPage
