import React, { useState } from "react";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Navegation from "./components/Navegation";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Helmet } from "react-helmet";
import "./App.css";

function App() {
  const [currentTab, handleTabChange] = useState("about");

  const renderTab = () => {
    if (currentTab === "About") {
      return <About />;
    }
    if (currentTab === "Contact") {
      return <Contact />;
    }
    if (currentTab === "Projects") {
      return <Projects />;
    }
    if (currentTab === "Resume") {
      return <Resume />;
    }
    return <About />;
  };

  return (
    <>
      <Helmet>
        <title>fabian's Portfolio/{currentTab}</title>
      </Helmet>
      <Header currentTab={currentTab} handleTabChange={handleTabChange} />
      <main>{renderTab()}</main>
      <Footer />
    </>
  );
}

export default App;