import React from "react";
import project from "../data/project.json";

const Projects = () => {
  return (
    <div className="container projects my-3" id="projects">
      <h1 className="ooo ">PROJECTS</h1>
      <div className="row d-flex justify-content-center align-content-center">
        {project.map((data) => (
          <div
            key={data.id}
            className="my-4 col-sm-6 col-md-4 col-lg-3 mx-3"
          >
            <div
              className="card bg-dark text-light"
              data-aos="flip-right"
              data-aos-duration="1000"
            >
              
              <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">{data.description}</p>
                <a href={data.demo} className="btn btn-primary mx-3">
                  Demo
                </a>
                <a href={data.source} className="btn btn-warning">
                  Code
                </a>
                <div className="imm">
                <img
                  src={data.imageSrc}
                  className="card-img-top"
                  alt="..."
                />
              </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
