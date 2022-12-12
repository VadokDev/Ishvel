import { render, screen } from '@testing-library/react';
import App from './App';

it.skip('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/X/i);
  expect(linkElement).toBeInTheDocument();
});
