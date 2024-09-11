import React from "react";
import Navegation from "../Navegation";

function Header(props) {
  const { currentTab, handleTabChange } = props;

  return (
    <div>
      <section>
        <header className="flex-row px-1">
          <div>
            <h1>fabian's Portfolio</h1>
          </div>
          <div>
            <Navegation
              currentTab={currentTab}
              handleTabChange={handleTabChange}
            ></Navegation>
          </div>
        </header>
      </section>
      <section class="hero">
        <div class="hero-cta">
          <h2>Welcome</h2>
          <p>
            Welcome to fabian's portfolio page, which is crafted with React.
            Here, you'll find a selection of projects I completed throughout the program.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Header;
