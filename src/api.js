// Meta provided fake API code
// https://raw.githubusercontent.com/courseraap/capstone/main/api.js
// This is a mock API for demonstration purposes only.
// It simulates fetching available times for a given date and submitting a reservation.
// The API does not perform any real network requests or database operations.
// It uses a seeded random number generator to simulate available times based on the date.
// The submitAPI function always returns true to indicate a successful submission.
// The API is not intended for production use and should be replaced with a real API in a real application.
// This is a mock API for demonstration purposes only.

const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

export const fetchAPI = function(date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};
export const submitAPI = function(formData) {
    return true;
};