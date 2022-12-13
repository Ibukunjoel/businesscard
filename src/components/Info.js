import React from "react";
import ibukun from "../images/ibukun.JPG";
import emaili from "../images/email-icon.png";
import linkedlni from "../images/linkedln-icon.svg";

function Info() {
  return (
    <div className="info">
      <img src={ibukun} alt="ibukun-image" className="ibukun" />
      <h2>Ibukun Agotola</h2>
      <p>Frontend Developer</p>
      <small>
        <a href="https://tinyurl.com/ibukunagotola" target="_blank" rel="noreferrer">
          ibukun.website
        </a>
      </small>
      <div className="socials-btn">
        <a className="email-btn"  href='mailto:ibukunjoelagotola@gmail.com' target="_blank" rel="noreferrer">
          <img className="email-i" src={emaili} alt='email-icon' />
          Email
        </a>
        <a className="linkedln-btn" href='https://www.linkedin.com/in/ibukun-agotola/' target="_blank" rel="noreferrer">
          <img className="linkedln-i" src={linkedlni} alt='linkedln-icon'/>
          Linkedln
        </a>
      </div>
    </div>
  );
}

export default Info;
