import { render, screen } from '@testing-library/react';
import React from 'react';
import { Cell2_3 } from '.';
import App from './App';

test('renders learn react link', () => {
  render(<Cell2_3 />);
  const linkElement = screen.getByText(/lettersoup-demo/i);
  expect(linkElement).toBeInTheDocument();
});
