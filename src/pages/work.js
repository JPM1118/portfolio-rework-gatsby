import React from "react";
import { useStaticQuery, graphql } from 'gatsby';

import Project from '../components/project';
import workStyles from './pageStyles/work.module.scss';

const WorkPage = () => {
  const data = useStaticQuery(graphql`
  query ProjectQuery {
    allWorkJson{
      edges{
        node{
          project{
            name
            title
            imageName
            siteLink
            githubLink
            description
          }
        }
      }
    }
  }
  `)
  const projects = data.allWorkJson.edges;
  return (
    <>
      <div className={workStyles.container}>
        <hr className={workStyles.hr} />
        <h1 className={workStyles.title}>Work</h1>
        {projects.map(project => {
          return <><Project key={project.node.project.name} project={project} /></>

        })}
      </div>
    </>
  )
}

export default WorkPage;