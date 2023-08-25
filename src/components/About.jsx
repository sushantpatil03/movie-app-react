import React from 'react';
import './About.css';
import AboutIMG from './about.jpg';

const About = () => {
  return (
    // <div className="about-us-card">
    //   <img src={AboutIMG} alt="About Us" className="card-image" />
    //   <h2 className="card-heading">Welcome to SushMoviezz</h2>
    //   <p className="card-content">
    //     Hey there. This is a free open source website for getting information about all the latest movies.This site uses omdb's API for getting info of movies. Mail us for suggestions and improvements.
    //   </p>
    // </div>
    <div className="card">
    <div className="card-content">
      <h3 className='about__h3'>A Great Movie App</h3>
      <h1 className='about__h1'>Discover a centralized hub for all your beloved movies</h1>
      <p className='about__p'>Hello from Sushant!! I am too glad you visited my website. This is just a chill weekend project by me to find movies by search term. Don't forget to give a kiss to Sush now! 😁</p>
    </div>
  </div>
  );
};

export default About;
