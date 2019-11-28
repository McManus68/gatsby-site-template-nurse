import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

export const query = graphql`
  query {
    dataJson(id: { eq: "1" }) {
      ...siteFields
    }
  }
`

const AboutPage = props => {
  return (
    <Layout data={props.data.dataJson}>
      <Head title="About" />
      <h1>About</h1>
      <p>Emmanuel, senior Java developer with 12 years of experience</p>
      <p>
        Need advices? <Link to="/contact">Contact me</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
