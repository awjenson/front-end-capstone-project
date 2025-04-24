import { fetchAPI } from './api';

// Citing use of AI
// I used both GitHub Copilot in VS Code and Cursor's AI Code Editor to help me code this file.

export const initializeTimes = () => {
    // Always use today's date if no date is provided
    const today = new Date();
    return fetchAPI(today);
};

export const updateTimes = (state, action) => {
    if (action.type === 'UPDATE_TIMES') {
        // Ensure we have a valid date before calling fetchAPI
        const date = action.payload ? new Date(action.payload) : new Date();
        return fetchAPI(date);
    }
    return state;
}; 