import React from "react";

import Project from '../components/project';
import workStyles from './pageStyles/work.module.scss';

const WorkPage = () => (
  <>
    <div className={workStyles.container}>
      <hr />
      <h1 className={workStyles.title}>Work</h1>
      <Project />
    </div>
  </>
)

export default WorkPage;