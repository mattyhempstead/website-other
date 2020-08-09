import React from 'react';
import './Home.css';

const Home = ():JSX.Element => {
  return (
    <div className="Home">
      Matty Hempstead
      <br />
      <br />
      <br />
      <div className="content">
        I am a <i>Computer Science</i> and <i>Data Science</i> student at University of Sydney.
        <br/><br/>
        I also work as a <i>Software Developer</i> at Envisage Software Solutions.

        <br/><br/><br/>
        I enjoy various <i>distinct</i> things.
      </div> 
  
      <div className="minimalism"></div>

    </div>
  );
};

export default Home;
