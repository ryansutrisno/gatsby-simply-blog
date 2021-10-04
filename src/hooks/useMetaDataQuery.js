import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export const useMetaDataQuery = () => {
  const data = useStaticQuery(graphql`
    query MetadataQuery {
      site {
        siteMetadata {
          author
          description
          title
        }
      }
    }
  `)
  return data.site.siteMetadata
}
