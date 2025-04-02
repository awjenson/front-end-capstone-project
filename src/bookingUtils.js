import { fetchAPI } from './api';

export const initializeTimes = () => {
    return fetchAPI();
};

export const updateTimes = (state, action) => {
    if (action.type === 'UPDATE_TIMES') {
        return fetchAPI(action.payload);
    }
    return state;
}; 