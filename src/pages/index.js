import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'
import ShowCase from '../components/showcase'
import styles from './index.module.scss'

export const query = graphql`
  query {
    dataJson {
      title
      pages {
        title
        slug
      }
    }
    file(relativePath: { eq: "images/m.png" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const IndexPage = props => {
  console.log(props)
  return (
    <Layout data={props.data.dataJson}>
      <Head title={props.data.dataJson.title} />
      <ShowCase img={props.data.file.childImageSharp.fluid} />
    </Layout>
  )
}

export default IndexPage
