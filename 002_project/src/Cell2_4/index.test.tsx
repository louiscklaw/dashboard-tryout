import { render, screen } from '@testing-library/react';
import { Cell2_4 } from '.';

test('renders learn react link', () => {
  render(<Cell2_4 />);
  const linkElement = screen.getByText(/cell/i);
  expect(linkElement).toBeInTheDocument();
});

test('has clear button after typing', async () => {
  const { container } = render(<Cell2_4 />);
  expect(container).toMatchSnapshot();
});
