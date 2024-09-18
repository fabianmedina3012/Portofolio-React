import React from "react";
import { VscGithubAlt } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";

function Footer() {
  return (
    <footer>
      <h2>Made by fabianmedina</h2>
        <ul>
          <a href="https://github.com/fabianmedina3012">
            <li className="logo">
              <VscGithubAlt />
            </li>
          </a>
          <a href="https://www.linkedin.com/in/fabian-medina-2a9247213/">
            <li className="logo">
              <AiOutlineLinkedin />
            </li>
          </a>
        </ul>
    </footer>
  );
}

export default Footer;