import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
// Expect the opening screen to show : 
// A textbox with a default passage written inside of it
// A button
// A title that says 'Enter text to speedread'


// Expect the screen to show a word and 3 buttons when the button is clicked.
// Expect a second component to appear now.