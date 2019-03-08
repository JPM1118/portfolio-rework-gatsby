import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

const Image = (props) => (
  <StaticQuery
    query={graphql`
      query {
        heroImage: file(relativePath: { eq: "abe.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 450, quality: 92) {
              ...GatsbyImageSharpFluid
            }
          }
        },
        isbtImage: file(relativePath:{ eq: "isbtss.JPG" }) {
          ...workImg
        },
        seasonalSupperImage: file(relativePath:{ eq: "seasonalSupperSs.JPG" }) {
          ...workImg
        },
        githubImage: file(relativePath:{ eq: "github.png"}){
          ...iconImg
        },
        linkImage: file(relativePath: { eq: "linkIcon.png"}){
          ...iconImg
        }
      }
    `}
    render={data => <Img fluid={data[props.imgName].childImageSharp.fluid} />}
  />
)
export default Image
