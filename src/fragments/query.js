import React from 'react'
import { graphql } from 'gatsby'

export const siteFields = graphql`
  fragment siteFields on DataJson {
    title
    description
    owner
    creationDate
    image
    pres1
    pres2
    legalNotice
    pages {
      title
      slug
    }
    cares {
      title
      icon
      description
    }
  }
`
