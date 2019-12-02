import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'
import ShowCase from '../components/showcase'
import Cares from '../components/cares'
import Contact from '../components/contact'
import Presentation from '../components/presentation'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

export const query = graphql`
  query {
    dataJson(id: { eq: "2" }) {
      ...siteFields
    }
  }
`
const IndexPage = props => {
  const data = props.data.dataJson
  return (
    <Layout data={data}>
      <Head title={data.title} />
      <Presentation data={data} />
      {/*<ShowCase data={data} />*/}
      <Cares data={data} />
      <Contact />
    </Layout>
  )
}

export default IndexPage
