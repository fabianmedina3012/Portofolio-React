import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Navegation(props) {
  const {
    currentTab,
    handleTabChange,
  } = props;
  useEffect(() => {
    document.title = capitalizeFirstLetter(currentTab.name);
  }, [currentTab]);

  return (
    <nav>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a
            href="#about"
            onClick={() => handleTabChange('About')}
            // Check to see if the currentTab is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentTab === 'About' ? 'nav-link active' : 'nav-link'}>
          About Me</a>
        </li>
        <li className="nav-item">
          <a
            href="#projects"
            onClick={() => handleTabChange('Projects')}
            // Check to see if the currentTab is `Portfolio`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentTab === 'Projects' ? 'nav-link active' : 'nav-link'}>
          Projects</a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => handleTabChange('Contact')}
            // Check to see if the currentTab is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentTab === 'Contact' ? 'nav-link active' : 'nav-link'}>
          Contact</a>
        </li>
        <li className="nav-item">
          <a
            href="#resume"
            onClick={() => handleTabChange('Resume')}
            // Check to see if the currentTab is `Resume`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentTab === 'Resume' ? 'nav-link active' : 'nav-link'}>
          Resume</a>
        </li>
      </ul>
    </nav>

  );
}

export default Navegation;