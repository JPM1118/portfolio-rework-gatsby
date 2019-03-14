import React from "react"
import PropTypes from "prop-types"

import Nav from './nav';
import { styles } from '../components/componentStyles/nav'

const showNav = ({ children }) => (
  <div >
    {children}
  </div>
)

showNav.propTypes = {
  children: PropTypes.node.isRequired,
}

export default showNav