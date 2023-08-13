import React from 'react';
import './About.css';
import AboutIMG from './about.jpg';

const About = () => {
  return (
    <div className="about-us-card">
      <img src={AboutIMG} alt="About Us" className="card-image" />
      <h2 className="card-heading">Welcome to SushMoviezz</h2>
      <p className="card-content">
        Hey there. This is a free open source website for getting information about all the latest movies.This site uses omdb's API for getting info of movies. Mail us for suggestions and improvements.
      </p>
    </div>
  );
};

export default About;
