import React from "react";
import "./projects.css";
import ProjectCard from "./project-card";
import { ProjectData } from "../../../data/projects";
import Separator from "../../common/separator/index";
function Projects() {
  const data = ProjectData;
  return (
    <div className="projects">
      <Separator />
      <div className="section-p">
      <label className="section-title">Projects</label>
      </div>
      <div>
        {data.map((project) => {
          return <ProjectCard project={project} />;
        })}
      </div>
    </div>
  );
}

export default Projects;