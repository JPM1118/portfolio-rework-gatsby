import React from 'react';

import Image from './image';
import projectStyles from './componentStyles/project.module.scss'

const Project = () => (
  <div className={projectStyles.container}>
    <div className={projectStyles.image}>
      <Image imgName="isbtImage" />
    </div>
    <h2 className={projectStyles.title}>Interior Sources </h2>
    <p className={projectStyles.description}>
      A small business, static site developed with Gatsby.js. The design is focused on being user friendly, easy to navigate, and quickly digestible.
    </p>
  </div>
)

export default Project;