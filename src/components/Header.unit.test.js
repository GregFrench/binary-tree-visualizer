import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders the title of the application', () => {
  render(<Header />);
  const linkElement = screen.getByText(/Binary Tree Visualizer/i);
  expect(linkElement).toBeInTheDocument();
});
