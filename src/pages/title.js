import React from "react"

import Image from "../components/image"

import titleStyles from './pageStyles/title.module.scss';

const TitlePage = () => (
  <div className={titleStyles.container}>
    <div className={titleStyles.item1}>
      <div className={titleStyles.image}>
        <Image imgName="heroImage" />
        <h2 className={titleStyles.description}>I produce user friendly and responsive sites, while focusing on writing clean code.</h2>
      </div>
    </div>
    <div className={titleStyles.item2}>
      <div className={titleStyles.titleText}>
        <h1 className={titleStyles.name}>
          JACK<br />
          McCORMICK
        </h1>
        <h2 className={titleStyles.subTitle}>
          Web Developer
        </h2>
        <div className={titleStyles.nav}>
          <div className={titleStyles.navItem}>Work</div>
          <div className={titleStyles.navItem}>Contact</div>
        </div>
      </div>
    </div>
  </div>
)

export default TitlePage
