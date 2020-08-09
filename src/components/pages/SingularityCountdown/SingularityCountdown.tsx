import React, { useState, useEffect } from 'react';
import './SingularityCountdown.css';

const SingularityCountdown = ():JSX.Element => {
  const [date, setDate] = useState(new Date());

  useEffect(() => { 
    setInterval(() => setDate(new Date()), 1000);
    // const updateDate = () => {
    //   setDate(new Date());
    //   window.requestAnimationFrame(updateDate);
    // }   
    // updateDate();
  }, []);

  const msLeft = new Date(2**31 * 1000).getTime() - date.getTime();

  return (
    <div className="SingularityCountdown">
      <div className="header">
        Countdown to the Technological Singularity
      </div>

      <div className="countdown">
        <span><div>{Math.floor(msLeft/1000/60/60/24)}</div><div>days</div></span>
        <span><div>{Math.floor(msLeft/1000/60/60)%24}</div><div>hours</div></span>
        <span><div>{Math.floor(msLeft/1000/60)%60}</div><div>minutes</div></span>
        <span><div>{Math.floor(msLeft/1000)%60}</div><div>seconds</div></span>
      </div>


      <div className="binary">
        {'0' + Math.floor(date.getTime()/1000).toString(2)}
      </div>

      <div className="desc">
        {/* Some time in the year 2038 ({new Date(2**31 * 1000).toISOString()}),  */}
        In the year 2038 (Jan 19 03:14:08), 
        all signed 32-bit integers used to store the number of seconds since the Unix epoch will&nbsp;
        <a href="https://en.wikipedia.org/wiki/Year_2038_problem">overflow</a>. 
        If there was ever a time for the&nbsp;
        <a href="https://en.wikipedia.org/wiki/Technological_singularity">technological singularity</a>
        &nbsp;to occur, it would surely be then.

        <br/><br/>
        Nobody knows what it will look like, all we know is that it is coming.
        <br/>
        But hey, at least now we have an <i>aesthetic</i> countdown.
      </div>

    </div>
  );
};

export default SingularityCountdown;
