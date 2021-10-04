import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export const useBannerQuery = () => {
  const data = useStaticQuery(graphql`
    query BannerQuery {
      markdownRemark(frontmatter: { type: { eq: "banner" } }) {
        frontmatter {
          bannerImage {
            childImageSharp {
              fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          bannerImageBtnLink
          bannerImageBtnText
          bannerImageText
        }
      }
    }
  `)
  return data.markdownRemark.frontmatter
}
