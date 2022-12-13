import React from "react";
import twitter from "../images/twitter-icon.png";
import facebook from "../images/facebook-icon.png";
import instagram from "../images/instagram-icon.png";
import github from "../images/github-icon.png";

export default function Socials() {
  return (
    <div className="socials">
      <a href="https://twitter.com/ai_joel" target="_blank" rel="noreferrer">
        <img src={twitter} className="twitter" alt='twitter-icon' />
      </a>
      <a href="https://www.facebook.com/Aijoeboy/" target="_blank" rel="noreferrer">
        <img src={facebook} className="facebook" alt='facebook-icon'/>
      </a>
      <a href="https://www.instagram.com/ibukunjoel/" target="_blank" rel="noreferrer">
        <img src={instagram} className="instagram" alt='instagram-icon'/>
      </a>
      <a href="https://github.com/Ibukunjoel" target="_blank" rel="noreferrer">
        <img src={github} className="github" alt='github-icon'/>
      </a>
    </div>
  );
}
