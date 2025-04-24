import { render, screen } from '@testing-library/react';
import Login from './LoginPage';


// Citing use of AI
// I used both GitHub Copilot in VS Code and Cursor's AI Code Editor to help me code this file.

// Wrap component with BrowserRouter since Hero likely contains Links
const renderLogin = () => {
    return render(
        <Login />
    );
};

describe('Login Component', () => {

    beforeEach(() => {
        renderLogin();
    });

  test('renders username input field', () => {

    const usernameInput = screen.getByLabelText("Username");
    expect(usernameInput).toBeInTheDocument();
    expect(usernameInput).toHaveAttribute('type', 'text');
    expect(usernameInput).toHaveAttribute('required');
  });

  test('renders password input field', () => {

    const passwordInput = screen.getByLabelText("Password");
    expect(passwordInput).toBeInTheDocument();
    expect(passwordInput).toHaveAttribute('type', 'password');
    expect(passwordInput).toHaveAttribute('required');
  });
});