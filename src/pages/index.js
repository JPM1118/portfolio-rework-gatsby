import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Title from './title';
import Work from './work';
import Contact from './contact';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['portfolio', 'software-developer']} />
    <Title />
    <Work _id="work" />
    <Contact _id="contact" />
  </Layout>
)

export default IndexPage
