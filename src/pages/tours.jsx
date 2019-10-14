import React from "react"
import Layout from "../components/layout.component"
// import Header from "../examples/header"
// import RegularHeader from "../examples/regularHeader"
import StyledHero from "../components/styled-hero.component"
import { graphql } from "gatsby"

const Tours = ({ data }) => {
  return (
    <Layout>
      <StyledHero img={data.defaultBcg.childImageSharp.fluid}>Tours</StyledHero>
    </Layout>
  )
}

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default Tours
