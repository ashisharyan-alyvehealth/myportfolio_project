import React from "react";
import "./skills.css";
import { SkillsData } from "../../../data/skills";
// import SkillCard from "./skill-card";
import Separator from "../../common/separator";
import SkillCard from "./skill-card";
function Skills() {
  const data = SkillsData;
  return (
    <div className="skills">
      <Separator />
      <div className="section-t">
      <label className="section-title">Skills</label>
      </div>
      <div className="skills-container">
        {data.map((item) => {
          return (
              <div className="skills-list">
                {item.list.map((skill) => {
                  return <SkillCard skill={skill} />;
                })}
              </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;