import React from "react";

const Projects = (props) => {
  return (
    <div id={props.id}>
      <div className="div1">
        <h2>Projects</h2>
        <ul>
          <li>
            <span className="underline--magical">BURGERQUEEN!</span>
          </li>
          <li>
            <span className="underline--magical">CHAMPSGG</span>
          </li>
          <li>
            <span className="underline--magical">MUSICMOOD</span>
          </li>
          <li>
            <span className="underline--magical">MDLINKS</span>
          </li>
        </ul>
      </div>
      <div className="div2">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.{" "}
        </p>
      </div>
      <div className="div3">
        <p>Link y descripción de todos mis proyectos bien malardísimos owo</p>
      </div>
    </div>
  );
};

export default Projects;
