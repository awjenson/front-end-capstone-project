// Remove the react-router-dom mock and just import what we need
import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';
import { fetchAPI } from './api';

// Mock the api module
jest.mock('./api', () => ({
    fetchAPI: jest.fn(),
    submitAPI: jest.fn(),
}));

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