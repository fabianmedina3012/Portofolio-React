import React from "react";
import Navegation from "./Navegation";

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
      <section className="hero">
        <div className="hero-cta">
          <h2> My React page</h2>
          <p>
            
          </p>
        </div>
      </section>
    </div>
  );
}

export default Header;
