import React from "react";
import profilePic from "../assets/profilePic/porfile.jpg";

function About() {
  return (
    <section id="about-me" className="my-5 intro">
      <div className="flex-row">
        <h1 id="about" className="section-title primary-border">
          About Me
        </h1>
      </div>
      <div className="flex-row" id="text-box">
        <div className="intro-info">
          <div className="intro-img">
            <img src={profilePic} style={{ width: "100%" }} alt="profile" />
          </div>
          <p>
          Hello, my name is Fabian Medina, 
          I was born and I am from Venezuela. 
          I am 20 years old. I have been in the United States for five years. 
          I am from the capital of my country Caracas.
          Caracas was where I lived all my childhood and half of my adolescence. 
          My arrival here was due to political problems and a lot of insecurity in my country. 
          My parents decided to come to live here, specifically in Parkland, Florida. 
          My adaptation process in this country was a little difficult for me since I did not have the best possible English and 
          I never dared to do many things for the same fear that I would be judged for my English, even so,
          I was able to graduate from Marjory High School Stoneman Douglas and being able to go to university while working.
          </p>
          <p>
          My hobby and my second job is photography. 
          I have been a photographer for a year and a half and I have loved many of the experiences 
          I have had throughout this time, I have met many people from many places and I have created good moments with friends.
          When I started my career at the College of Computer Science, 
          I understood that I did not want to last so long at the university to be able to have my degree and be able to work,
          so I decided to take the bootcamp coding course to advance much faster and be able to achieve my goals. faster.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
