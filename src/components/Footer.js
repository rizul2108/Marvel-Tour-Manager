import React from "react";
import {Link} from "react-router-dom"
import gitimg from "./Images/github.png"
import linkedin from "./Images/linkedin.png"
import "./footer.css"
export default function Footer() {
  return (
    <footer className="foot">
      
        <Link to="https://github.com/rizul2108">
          <img src={gitimg} className="footer-logo" height="40px" alt="git-icon"/>
        </Link>
        <Link to="https://www.linkedin.com/in/rizul-gupta-1b8880255/">
          <img src={linkedin} className="footer-logo" height="40px" alt="linkedin-icon" />
        </Link>
    </footer>
  );
}
