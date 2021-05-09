import { render, screen } from '@testing-library/react';
import Dropdown from './Dropdown';

test('renders the dropdown title\'s correctly', () => {
  render(<Dropdown />);
  const treeDropdownElement = screen.getByText(/Tree/i);
  const algorithmsDropdownElement = screen.getByText(/Algorithms/i);

  expect(treeDropdownElement).toBeInTheDocument();
  expect(algorithmsDropdownElement).toBeInTheDocument();
});
