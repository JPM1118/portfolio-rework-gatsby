import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Title from './title';
import Work from './work';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['portfolio', 'software-developer']} />
    <Title />
    <Work />
  </Layout>
)

export default IndexPage
