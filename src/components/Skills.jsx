import React from "react";
import skills from '../data/skills.json'; // Corrected import statement

const Skills = () => {
  return (
    <div className="container skills" id="skills">
      <h1>SKILLS</h1>
      <div className="items">
        {skills.map((data) => (
          <div
            className="item"
            key={data.id}
            data-aos="flip-left"
            data-aos-duration="1000"
          >
           
            <h3>{data.title}</h3>
            <p className="oooo">{data.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
