// Import the React library to create and use React components
import React from 'react';

// Import ReactDOM for rendering React components into the DOM
import ReactDOM from 'react-dom/client';

// Import the main CSS file for global styles
import './index.css';

// Import the main App component that serves as the root component of the application
import App from './App';

// Import the reportWebVitals function to measure and report web performance metrics
import reportWebVitals from './reportWebVitals';

// Get the root element from the HTML document where the React application will be rendered
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the application
root.render(
  // Use React.StrictMode to wrap the App component for highlighting potential problems
  <React.StrictMode>
    {/* Render the main App component */}
    <App />
  </React.StrictMode>
);

// Call the reportWebVitals function to start measuring web performance metrics
// You can pass a function here to log or send the metrics to an analytics endpoint
reportWebVitals();
