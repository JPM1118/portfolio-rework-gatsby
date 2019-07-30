
import React from "react";
import { slide as Menu } from 'react-burger-menu'

export default props => {
  const { toggleNav } = props
  return (
    <Menu {...props} >
      <a className="navAnchor" href="#home" onClick={toggleNav}>
        Home
      </a>

      <a className="navAnchor" href="#work" onClick={toggleNav}>
        Work
      </a>

      <a className="navAnchor" href="#contact" onClick={toggleNav}>
        Contact
      </a>
    </Menu>
  )
}

