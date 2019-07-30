import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Title from './title';
import Work from './work';
import Contact from './contact';
import Nav from '../components/nav';
import '../components/componentStyles/nav.scss';
const IndexPage = () => {
  const [navOpen, setNavOpen] = useState(false)
  const toggleNav = () => {
    setNavOpen(false)
  }
  return (
    <Layout>
      <SEO title="Home" keywords={['portfolio', 'software-developer']} />
      <Nav isOpen={navOpen} toggleNav={toggleNav} pageWrapId={"page-wrap"} right />
      <Title />
      <Work _id="work" />
      <Contact _id="contact" />
    </Layout>
  )
}

export default IndexPage
