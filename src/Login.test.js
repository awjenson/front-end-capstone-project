import { render, screen } from '@testing-library/react';
import Login from './Login';

// Helper function to render the Login component
const renderLogin = () => {
  render(<Login />);
};

describe('Login Component', () => {
  test('renders Username input field', () => {
    renderLogin();
    const usernameInput = screen.getByLabelText(/username/i);
    expect(usernameInput).toBeInTheDocument();
    expect(usernameInput).toHaveAttribute('type', 'text');
    expect(usernameInput).toHaveAttribute('required');
    expect(usernameInput).toHaveAttribute('placeholder', 'Enter your username');
  });

  test('renders Password input field', () => {
    renderLogin();
    const passwordInput = screen.getByLabelText(/password/i);
    expect(passwordInput).toBeInTheDocument();
    expect(passwordInput).toHaveAttribute('type', 'password');
    expect(passwordInput).toHaveAttribute('required');
    expect(passwordInput).toHaveAttribute('placeholder', 'Enter your password');
  });

  test('renders Login button', () => {
    renderLogin();
    const loginButton = screen.getByRole('button', { name: /login/i });
    expect(loginButton).toBeInTheDocument();
    expect(loginButton).toHaveAttribute('type', 'submit');
  });

  test('renders the placeholder message about the feature launch', () => {
    renderLogin();
    const launchMessage = screen.getByText(/This feature is expected to be launched in 2026/i);
    expect(launchMessage).toBeInTheDocument();
  });

  test('renders the placeholder message about the form being for demonstration', () => {
    renderLogin();
    const demoMessage = screen.getByText(/This login form has not been implemented yet/i);
    expect(demoMessage).toBeInTheDocument();
  });
});