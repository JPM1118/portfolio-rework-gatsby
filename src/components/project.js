import React from 'react';

import Image from './image';
import projectStyles from './componentStyles/project.module.scss'

const Project = (props) => {
  const { imageName, siteLink, gitHubLink, title, description } = props.project.node.project;
  return (
    <div className={projectStyles.container}>
      <div className={projectStyles.image}>
        <Image imgName={imageName} />
      </div>
      <div className={projectStyles.icons}>
        <div><a href={siteLink}><Image imgName="linkImage" /></a></div>
        <div><a href={gitHubLink}><Image imgName="githubImage" /></a></div>
      </div>
      <h2 className={projectStyles.title}>{title}</h2>
      <p className={projectStyles.description}>{description}</p>
      <hr className={projectStyles.hr} />
    </div>
  )
}

export default Project;