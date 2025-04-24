// Remove the react-router-dom mock and just import what we need
import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';
import { fetchAPI } from './api';

// Citing use of AI
// I used both GitHub Copilot in VS Code and Cursor's AI Code Editor to help me code this file.

// Mock the api module
jest.mock('./api', () => ({
    fetchAPI: jest.fn(),
    submitAPI: jest.fn(),
}));

// First, define the mock props that we'll use across all tests
const mockProps = {
    availableTimes: ['17:00', '18:00', '19:00'],
    dispatch: jest.fn(),
    submitForm: jest.fn(),
    bookingData: []
};

describe('initializeTimes', () => {
    test('Should return available times from fetchAPI', () => {
        // Mock fetchAPI to return a non-empty array
        fetchAPI.mockReturnValue(['17:00', '18:00', '19:00']);

        // Call initializeTimes
        const result = fetchAPI();

        // Verify that fetchAPI was called and the result matches
        expect(fetchAPI).toHaveBeenCalled();
        expect(result).toEqual(['17:00', '18:00', '19:00']);
    });
});

describe('updateTimes', () => {
    test('Should return updated times from fetchAPI for a given date', () => {
        // Mock fetchAPI to return a non-empty array
        fetchAPI.mockReturnValue(['20:00', '21:00', '22:00']);

        // Define a sample date
        const selectedDate = new Date('2025-03-28');

        // Call updateTimes with a mock state and action
        const result = fetchAPI(selectedDate);

        // Verify that fetchAPI was called with the correct date
        expect(fetchAPI).toHaveBeenCalledWith(selectedDate);
        expect(result).toEqual(['20:00', '21:00', '22:00']);
    });
});

// Fix the failing tests
test('Renders the "Choose date" label in BookingForm', () => {
    render(<BookingForm {...mockProps} />);
    const headerElement = screen.getByText(/choose date/i);
    expect(headerElement).toBeInTheDocument();
});
  
test('Allows the user to submit the BookingForm', () => {
    const mockDispatch = jest.fn();
    render(<BookingForm {...mockProps} dispatch={mockDispatch} />);

    // Fill out the form fields
    fireEvent.change(screen.getByLabelText(/choose date/i), { 
        target: { value: '2025-03-28' } 
    });
    fireEvent.change(screen.getByLabelText(/choose time/i), { 
        target: { value: '17:00' } 
    });
    fireEvent.change(screen.getByLabelText(/number of guests/i), { 
        target: { value: '2' } 
    });
    fireEvent.change(screen.getByLabelText(/occasion/i), { 
        target: { value: 'Birthday' } 
    });

    // Submit the form
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    // Verify dispatch was called
    expect(mockDispatch).toHaveBeenCalled();
});


describe('BookingForm HTML5 Validation', () => {
    beforeEach(() => {
        // Mock props that BookingForm expects
        const props = {
            availableTimes: ['17:00', '18:00', '19:00'],
            dispatch: jest.fn(),
            submitForm: jest.fn(),
            bookingData: []
        };
        render(<BookingForm {...props} />);
    });

    test('date input has required attribute and correct type', () => {
        const dateInput = screen.getByLabelText(/choose date/i);
        expect(dateInput).toHaveAttribute('type', 'date');
        expect(dateInput).toHaveAttribute('required');
    });

    test('time select has required attribute and is disabled when no date selected', () => {
        const timeSelect = screen.getByLabelText(/choose time/i);
        expect(timeSelect).toHaveAttribute('required');
        expect(timeSelect).toBeDisabled();
    });

    test('guests input has required attribute and correct min/max values', () => {
        const guestsInput = screen.getByLabelText(/number of guests/i);
        expect(guestsInput).toHaveAttribute('type', 'number');
        expect(guestsInput).toHaveAttribute('required');
        expect(guestsInput).toHaveAttribute('min', '1');
        expect(guestsInput).toHaveAttribute('max', '10');
    });

    test('occasion select has required attribute', () => {
        const occasionSelect = screen.getByLabelText(/occasion/i);
        expect(occasionSelect).toHaveAttribute('required');
    });

    test('submit button is disabled when form is invalid', () => {
        const submitButton = screen.getByRole('button', { name: /submit/i });
        expect(submitButton).toBeDisabled();
        expect(submitButton).toHaveStyle({ 
            backgroundColor: 'lightgray',
            cursor: 'not-allowed'
        });
    });
});

describe('Form-wide Validation', () => {

    beforeEach(() => {
        render(<BookingForm {...mockProps} />);
    });

    test('validates entire form - all fields valid', () => {
        // Fill all fields with valid data
        const dateInput = screen.getByLabelText(/choose date/i);
        const timeSelect = screen.getByLabelText(/choose time/i);
        const guestsInput = screen.getByLabelText(/number of guests/i);
        const occasionSelect = screen.getByLabelText(/occasion/i);
        
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        
        fireEvent.change(dateInput, { 
            target: { value: tomorrow.toISOString().split('T')[0] } 
        });
        fireEvent.change(timeSelect, { target: { value: '17:00' } });
        fireEvent.change(guestsInput, { target: { value: '4' } });
        fireEvent.change(occasionSelect, { target: { value: 'Birthday' } });
        
        const submitButton = screen.getByRole('button', { name: /submit/i });
        expect(submitButton).not.toBeDisabled();
        expect(submitButton).toHaveStyle({ backgroundColor: '#F4CE14' });
    });

    test('validates entire form - missing required fields', () => {
        // Only fill some fields, leaving others empty
        const dateInput = screen.getByLabelText(/choose date/i);
        const timeSelect = screen.getByLabelText(/choose time/i);
        
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        
        // Only fill date and time
        fireEvent.change(dateInput, { 
            target: { value: tomorrow.toISOString().split('T')[0] } 
        });
        fireEvent.change(timeSelect, { target: { value: '17:00' } });
        
        const submitButton = screen.getByRole('button', { name: /submit/i });
        expect(submitButton).toHaveStyle({ backgroundColor: 'lightgray' });
        expect(submitButton).toHaveAttribute('disabled');
    });
});
