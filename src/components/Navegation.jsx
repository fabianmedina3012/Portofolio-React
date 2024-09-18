import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from "../utils/helpers";

function Navegation(props) {
  const { currentTab, handleTabChange } = props;

  useEffect(() => {
    // Ensure currentTab is defined before accessing name
    if (currentTab && currentTab.name) {
      document.title = capitalizeFirstLetter(currentTab.name);
    }
  }, [currentTab]);

  return (
    <nav>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a
            href="#about"
            onClick={() => handleTabChange('About')}
            className={currentTab?.name === 'About' ? 'nav-link active' : 'nav-link'}
          >
            About Me
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#projects"
            onClick={() => handleTabChange('Projects')}
            className={currentTab?.name === 'Projects' ? 'nav-link active' : 'nav-link'}
          >
            My Work
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => handleTabChange('Contact')}
            className={currentTab?.name === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact Me
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#resume"
            onClick={() => handleTabChange('Resume')}
            className={currentTab?.name === 'Resume' ? 'nav-link active' : 'nav-link'}
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navegation;
