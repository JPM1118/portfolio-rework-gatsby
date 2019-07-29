import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const Image = (props) => (
  <StaticQuery
    query={graphql`
      query {
        heroImage: file(relativePath: { eq: "headshot.png" }) {
          childImageSharp {
            fluid(maxWidth: 450, quality: 92) {
              ...GatsbyImageSharpFluid
            }
          }
        },
        ffaImage: file(relativePath:{ eq: "ffa_scrnsht.png" }) {
          ...workImg
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
