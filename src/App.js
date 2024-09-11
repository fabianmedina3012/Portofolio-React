// Import the necessary React library and hooks
import React, { useState } from "react";

// Import various components used within the App component
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import Projects from "../src/components/Projects";
import Resume from "../src/components/Resume";

// Import the Helmet component for managing changes to the document head
import { Helmet } from "react-helmet";

// Import the main CSS file for styling the application
import "./App.css";

// Define the main App component
function App() {
  // Declare a state variable `currentTab` and a function `handleTabChange` to update it
  // Initialize `currentTab` with the value "about"
  const [currentTab, handleTabChange] = useState("about");

  // Define a function to render the content based on the currentTab value
  const renderTab = () => {
    // Check the value of currentTab and return the corresponding component
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
    // Default to rendering the About component if no match is found
    return <About />;
  };

  // Render the App component
  return (
    <>
      {/* Use Helmet to dynamically set the page title based on the current tab */}
      <Helmet>
        <title>fabian's Portfolio/{currentTab}</title>
      </Helmet>

      {/* Render the Header component, passing currentTab and handleTabChange as props */}
      <Header currentTab={currentTab} handleTabChange={handleTabChange} />

      {/* Render the main content by calling the renderTab function */}
      <main>{renderTab()}</main>

      {/* Render the Footer component */}
      <Footer />
    </>
  );
}

// Export the App component as the default export of this module
export default App;
