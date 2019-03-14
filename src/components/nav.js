
import React from "react";
import { slide as Menu } from 'react-burger-menu'

export default props => (
  <Menu {...props} >
    <a className="navAnchor" href="#home">
      Home
      </a>

    <a className="navAnchor" href="#work">
      Work
      </a>

    <a className="navAnchor" href="#contact">
      Contact
      </a>
  </Menu>
);


