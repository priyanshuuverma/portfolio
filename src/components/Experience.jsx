import React from "react";
import experience from "../data/experience.json";

const Experience = () => {
  return (
    <>
      <div className="container ex" id="experience">
        <h1>EXPERIENCE AND COURSE</h1>
        {experience.map((data) => {
          return (
            <>
              <div
                key={data.id}
                className="ex-items "
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                
                <div className="right">
                  <h2 className="da">{data.role}</h2>
                  <h4 className="h4">
                    <span >
                      {data.startDate} {data.endDate}{" "}
                    </span>{" "}
                    <span >{data.location}</span>
                  </h4>
                  <h5 >{data.experiences[0]}</h5>
                  <h5 >{data.experiences[1]}</h5>
                </div>
              </div>
             
            </>
          );
        })}
      </div>
    </>
  );
};

export default Experience;