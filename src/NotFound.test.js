import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFound from './NotFound';

// Citing use of AI
// I used both GitHub Copilot in VS Code and Cursor's AI Code Editor to help me code this file.

describe('NotFound Component', () => {

  // Test that the page displays the correct text
  test('displays the correct text', () => {
    render(<NotFound />);
    expect(screen.getByText("Oops! The page you're looking for doesn't exist.")).toBeInTheDocument();
  }); 
});