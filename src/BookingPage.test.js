import { initializeTimes, updateTimes } from './bookingUtils';
import { fetchAPI } from './api';

// Citing use of AI
// I used both GitHub Copilot in VS Code and Cursor's AI Code Editor to help me code this file.

// Mock the api module
jest.mock('./api', () => ({
    fetchAPI: jest.fn(),
}));

// Mock localStorage
const localStorageMock = {
    store: {},
    getItem: jest.fn(function(key) {
        return this.store[key] || null;
    }),
    setItem: jest.fn(function(key, value) {
        this.store[key] = value;
    }),
    clear: jest.fn(function() {
        this.store = {};
    })
};

Object.defineProperty(window, 'localStorage', {
    value: localStorageMock
});

// API Tests
describe('initializeTimes', () => {
    test('Should return available times from fetchAPI', () => {
        // Mock fetchAPI to return a non-empty array
        fetchAPI.mockReturnValue(['17:00', '18:00', '19:00']);

        // Call initializeTimes
        const result = initializeTimes();

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
        const result = updateTimes([], { type: 'UPDATE_TIMES', payload: selectedDate });

        // Verify that fetchAPI was called with the correct date
        expect(fetchAPI).toHaveBeenCalledWith(selectedDate);
        expect(result).toEqual(['20:00', '21:00', '22:00']);
    });
});

// localStorage Tests
describe('localStorage operations', () => {
    beforeEach(() => {
        localStorageMock.clear();
        jest.clearAllMocks();
    });

    // Test for reading from localStorage
    test('Should read from localStorage', () => {
        // Setup test data
        const testData = [{ date: '2024-03-20', time: '17:00', guests: 2 }];
        const testDataString = JSON.stringify(testData);
        
        // IMPORTANT CHANGE: Directly mock the return value for this specific call
        localStorage.getItem.mockReturnValueOnce(testDataString);
        
        // Read from localStorage
        const storedData = JSON.parse(localStorage.getItem('bookingData') || '[]');
    
        // Verify
        expect(localStorage.getItem).toHaveBeenCalledWith('bookingData');
        expect(storedData).toEqual(testData);
    });

    // Test for writing to localStorage
    test('Should write to localStorage', () => {
        // Setup test data
        const testData = [{ date: '2024-03-20', time: '17:00', guests: 2 }];
        const testDataString = JSON.stringify(testData);

        // Write to localStorage
        localStorage.setItem('bookingData', testDataString);

        // Verify
        expect(localStorage.setItem).toHaveBeenCalledWith('bookingData', testDataString);
    });
});