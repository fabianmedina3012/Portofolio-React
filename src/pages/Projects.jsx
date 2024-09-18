import React from "react";
import Digidex from "../assets/projectsPic/Digidex.png"
import jate from "../assets/projectsPic/jate.png"
import taskboard from "../assets/projectsPic/taskboard.png"
import QuizQuesters from "../assets/projectsPic/QuizQuesters.png"
import personalblog from "../assets/projectsPic/personalblog.png"

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
              <a href="https://github.com/fabianmedina3012/Personal-Blog-">
                {" "}
                <img
                  src={personalblog}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt=""
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Personal-Blog</h4>
              <p>
              I have to create a two-page website where users will enter and blog posts. 
              It includes creating a content form, dynamically rendering blog posts,
               and implementing a light/dark mode switch.
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/fabianmedina3012/Text-Editor">
                {" "}
                <img
                  src={jate}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt=""
                />
              </a>
            </div>
            <div className="job-text">
              <h4>J.A.T.E</h4>
              <p>
              Your task is to build a text editor that runs in the browser. 
              To build this text editor, you will start with an existing application 
              and implement methods for getting and storing data to an IndexedDB database.
              You will use a package called idb, which is a lightweight wrapper around the IndexedDB API.
              It features a number of methods that are useful for storing and retrieving data,
              and is used by companies like Google and Mozilla.
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/mbdrag3/project-2">
                {" "}
                <img
                  src={Digidex}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt=""
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Digidex</h4>
              <p>
              This is a web application for storing and managing Pokemon collections.
              Users will be able to search a substantial library of cards, if they log in then they will be able to add them to their collection.
              Cards can be clicked on to view their details.
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/fabianmedina3012/Task-Board">
                {" "}
                <img
                  src={taskboard}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt=""
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Task Board</h4>
              <p>
              I created a simple task board application that allows a team to manage project tasks by modifying starter code. 
              This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/crob127/QuizQuesters">
                {" "}
                <img
                  src={QuizQuesters}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt=""
                />
              </a>
            </div>
            <div className="job-text">
              <h4>QuizQuesters</h4>
              <p>
              Quizquesters are created to entertain and educate those people who are interested in knowing the general culture, 
              the gamers will have fun trying to guess the answer to the question, and as a bonus, 
              they will be given a random character as a prize for doing so.
              </p>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}

export default Projects;
