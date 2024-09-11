import React from "react";


function Projects() {
  return (
    <div>
      <section id="work" className="jobs">
        <div className="flex-row">
          <h2 className="section-title secondary-border">Work</h2>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="">
                {" "}
                {/* <img
                  src={sphereImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt=""
                /> */}
              </a>
            </div>
            <div className="job-text">
              <h4>tittle</h4>
              <p>
                text
              </p>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}

export default Projects;
