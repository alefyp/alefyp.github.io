import React from 'react';
import styles from './projects.module.scss';

// eslint-disable-next-line react/prop-types
const Projects = ({ id }) => {
  return (
    <div className={styles.section} id={id}>
      <div className="div1">
        <h2>Projects</h2>
        <ul>
          <li>
            <span className="underline--magical">BurgerQueen!</span>
          </li>
          <li>
            <span className="underline--magical">ChampsGg</span>
          </li>
          <li>
            <span className="underline--magical">MusicMood</span>
          </li>
          <li>
            <span className="underline--magical">MdLinks</span>
          </li>
        </ul>
      </div>
      <div className="div2">
        <p>
          Lorem ipsum
        </p>
      </div>
      <div className="div3">
        <p>Link y descripción de todos mis proyectos bien malardísimos owo</p>
      </div>
    </div>
  );
};

export default Projects;
