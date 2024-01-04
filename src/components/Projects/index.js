import React from "react";
import projectsData from "../../projects.json";
import "./index.css";

const Projects = () => {
  return (
    <section className="projectSection">
      <h2 className="projectText">Projects</h2>
      <div className="mainProjectsContainer">
        {projectsData.map((item) => {
          return (
            <div className="innerProjectsContainer" key={item.projectName}>
              <div className="eachPojectCard">
                <img
                  src={item.projectBanner}
                  alt="project-image"
                  className="projectImage"
                />
                <h3 className="projectName">{item.projectName}</h3>
                <p className="projectDes">
                 {
                  item.projectTitle
                 }
                </p>
                <div className="skillsCard">
                  {
                    item.technologies.map((technology,i)=>{
                        return <span className="eachSkill">{technology}</span>
                    })
                  }
                </div>
                <div className="showCard">
                  <a href={item.demoLink} target="_blank"  className="linksBtn">
                    Demo
                  </a>
                  <a href={item.sourseLink} target="_blank" className="linksBtn">
                    Sourse
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
