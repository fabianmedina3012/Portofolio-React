// Import the render method from @testing-library/react for rendering components in testing environments
// Import the screen object for accessing elements in the virtual DOM created by @testing-library/react
import { render, screen } from '@testing-library/react';

// Import the App component that we are going to test
import App from './App';

// Define a test case with a description 'renders learn react link'
test('renders learn react link', () => {
  // Render the App component inside the virtual DOM provided by the testing library
  render(<App />);

  // Use the screen object to find an element containing the text 'learn react'
  // The text is matched case-insensitively due to the '/i' flag
  const linkElement = screen.getByText(/learn react/i);

  // Assert that the linkElement is present in the document
  expect(linkElement).toBeInTheDocument();
});
