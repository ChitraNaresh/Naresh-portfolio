import React from "react";
import skills from "../../skills.json";
import "./index.css"

const Experience = () => {
  return (
    <section className="experienceSection" id="">
      <h2 className="experienceText">Skills</h2>
      <div className="skillsContainer">
      <div className="experienceContent">
        {skills.map((skill) => {
          const { title, imageSrc } = skill;
          return (
            <div className="experienceSkills">
              <div className="skillImageContainer">
                <img className="skillImg" src={imageSrc} alt={title} />
              </div>
              <p className="skillName">{title}</p>
            </div>
          );
        })}
      </div>
      </div>
    </section>
  );
};

export default Experience;
