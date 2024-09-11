import React from "react";
//import myResume from "../../assets/files/Lindsey_Martin_Resume_2023.pdf";
import { DiAptana } from "react-icons/di";
import { DiDatabase } from "react-icons/di";
import { DiCodeBadge } from "react-icons/di";



function Resume() {
  return (
    <div>
      <section id="welcome-section" className="download-intro">
        <div className="flex-row">
          <h2 className="section-title primary-border">My Resume</h2>
        </div>
        <div className="flex-row">
          <div className="download-info">
            <div className="download-text">
              {/* <a href={} className="download-logo" download>
                <BsCloudDownload />
              </a> */}
              <p>
                Feel free to check the list of Developer
                Proficiencies
              </p>
            </div>
          </div>
        </div>
        
      </section>
      <section id="home-page-body" className="resume-body">
        <div className="article column1">
          <p className="column-title">Font-End Tech</p>
          <p className="column-text">
            <ul>
              <li className="logo">
                <DiCodeBadge />
              </li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>APIs</li>
              <li>CSS Framework</li>
            </ul>
          </p>
        </div>
        <div className="article column2">
          <p className="column-title">Back-End Tech</p>
          <p className="column-text">
            <ul>
              <li className="logo">
                <DiAptana />
              </li>
              <li>Node.Js</li>
              <li>Jest</li>
              <li>Express.js</li>
              <li>SQL</li>
              <li>Sequelize</li>
              <li>Object-Relational Mapping(ORM)</li>
              <li>Model-View-Controller (MVC)</li>
            </ul>
          </p>
        </div>
        <div className="article column3">
          <p className="column-title">Performance Tech</p>
          <p className="column-text">
            <ul>
              <li className="logo">
                <DiDatabase />
              </li>
              <li>NoSQL</li>
              <li>MongoDB/Mongoose</li>
              <li>GraphQL</li>
              <li>React</li>
              <li>Progressive Web Applications (PWA)</li>
              <li>MERN</li>
              <li>State</li>
            </ul>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Resume;
