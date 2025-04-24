import React, { useState, useEffect } from 'react';

export default function BookingForm({ availableTimes, dispatch, submitForm, bookingData }) {

    // State variables for the form
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);

    // Constants for the form
    const OCCASIONS = [
        'Birthday',
        'Anniversary',
        'Date Night',
        'Business Meal',
        'Special Celebration',
        'Other',
    ];

    // Validate form whenever any field changes
    useEffect(() => {
        const validateForm = () => {
            const isDateValid = date !== '';
            const isTimeValid = time !== '';
            const isGuestsValid = guests >= 1 && guests <= 10;
            const isOccasionValid = occasion !== '';


            setIsFormValid(isDateValid && isTimeValid && isGuestsValid && isOccasionValid);
        };

        validateForm();
    }, [date, time, guests, occasion]);


    //   // Get today's date in Chicago timezone formatted as YYYY-MM-DD for the min attribute
//   const getChicagoDate = () => {
//     // Create a date in Chicago's timezone
//     const options = { timeZone: 'America/Chicago' };
//     const chicagoDate = new Date().toLocaleString('en-US', options);
//     return new Date(chicagoDate);
//   };
  
//   // Get today's date in Chicago timezone formatted as YYYY-MM-DD for the min attribute
//   const getMinDate = () => {
//     const today = getChicagoDate();
//     return today.toISOString().split('T')[0];
//   };

    const handleDateChange = (e) => {
        const selectedDate = new Date(e.target.value);
        setDate(e.target.value);
        dispatch({ type: 'UPDATE_TIMES', payload: selectedDate });
    };

    const handleGuestsChange = (e) => {
        const value = parseInt(e.target.value);
        if (value >= 1 && value <= 10) {
            setGuests(value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Disable the submit button if the form is not valid
        if (!isFormValid) return;

        // Form is valid, submit the form
        const formData = {
            date,
            time,
            guests,
            occasion,
        };
        
        // Call the submitForm function passed via props
        // The submitForm function contains the Meta provided submitAPI function
        submitForm(formData);

        // Reset the form after submission
        setDate('');
        setTime('');
        setGuests(1);
        setOccasion('');
    };

    // Filter available times to exclude already booked times for the selected date
    const filteredTimes = availableTimes.filter((timeOption) => {
        return !bookingData.some(
            (booking) => booking.date === date && booking.time === timeOption
        );
    });

    return (
        <main>
            <section>
                <h2>Book A Reservation</h2>

                <div className="booking-form-container">

                    <p>Please fill out the form below to book a reservation.</p>

                    {/* Booking Form */}    
                    <form onSubmit={handleSubmit} className="booking-form" aria-label="Booking Form">
                        {/* Date Field */}
                        <div className="form-group">
                            <label htmlFor="booking-date">Choose date</label>
                            <input
                                type="date"
                                id="booking-date"
                                name="booking-date"
                                value={date}
                                onChange={handleDateChange}
                                required
                            />
                        </div>

                        {/* Time Field */}
                        <div className="form-group">
                            <label htmlFor="booking-time">Choose time</label>
                            <select
                                id="booking-time"
                                name="booking-time"
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                                disabled={!date} // Disable until date is selected
                                required
                            >
                                <option value="">Select a time</option>
                                {/* Filter available times to exclude already booked times for the selected date */}
                                {filteredTimes.map((timeOption) => (
                                    <option key={timeOption} value={timeOption}>
                                        {timeOption}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Guests Field */}
                        <div className="form-group">
                            <label htmlFor="booking-guests">Number of guests</label>
                            <input
                                type="number"
                                id="booking-guests"
                                name="booking-guests"
                                min="1"
                                max="10"
                                value={guests}
                                onChange={handleGuestsChange}
                                required
                            />
                        </div>

                        {/* Occasion Field */}
                        <div className="form-group">
                            <label htmlFor="booking-occasion">Occasion</label>
                            <select
                                id="booking-occasion"
                                name="booking-occasion"
                                value={occasion}
                                onChange={(e) => setOccasion(e.target.value)}
                                required
                            >
                                <option value="">Select an occasion</option>
                                {OCCASIONS.map((occasion) => (
                                    <option key={occasion} value={occasion}>
                                        {occasion}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Submit Button */}
                        <button 
                            type="submit" 
                            className="submit-button"
                            disabled={!isFormValid}
                            aria-label="Submit Button"
                            style={{ 
                                backgroundColor: !isFormValid ? 'lightgray' : '#F4CE14',
                                cursor: !isFormValid ? 'not-allowed' : 'pointer'
                            }}
                        >
                            Submit
                        </button>
                    </form>

                </div>
            </section>

            {/* Table to Display Booking Data */}
            <section className="confirmed-booking-container">
                <h2>Confirmed Reservations</h2>
                <table className="booking-table">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Guests</th>
                            <th>Occasion</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookingData.map((booking, index) => (
                            <tr key={index}>
                                <td>{booking.date}</td>
                                <td>{booking.time}</td>
                                <td>{booking.guests}</td>
                                <td>{booking.occasion}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </main>
    );
}