import React from "react"
import PropTypes from "prop-types"

const Layout = ({ children }) => (
  <div>
    <main>{children}</main>
    <footer>
      © {new Date().getFullYear()}, By Jack McCormick
    </footer>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
