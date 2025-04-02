import React, { useState } from 'react';

export default function BookingForm({ availableTimes, dispatch, submitForm, bookingData }) {
    console.log('Booking Data in BookingForm:', bookingData); // Debugging

    // Mock react-router-dom
    jest.mock('react-router-dom', () => ({
        useNavigate: () => jest.fn(),
    }));

    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('');

    const OCCASIONS = [
        'Birthday',
        'Anniversary',
        'Date Night',
        'Business Meal',
        'Special Celebration',
        'Other',
    ];

    const handleDateChange = (e) => {
        const selectedDate = new Date(e.target.value);
        setDate(e.target.value);
        dispatch({ type: 'UPDATE_TIMES', payload: selectedDate });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            date,
            time,
            guests,
            occasion,
        };

        console.log('Form submitted:', formData);

        // Call the submitForm function passed via props
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
        <>
            <h2>Book A Reservation</h2>
            <form onSubmit={handleSubmit} className="booking-form">
                {/* Date Field */}
                <div className="form-group">
                    <label htmlFor="date">Choose date</label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        value={date}
                        onChange={handleDateChange}
                        required
                    />
                </div>

                {/* Time Field */}
                <div className="form-group">
                    <label htmlFor="time">Choose time</label>
                    <select
                        id="time"
                        name="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        required
                    >
                        <option value="">Select a time</option>
                        {filteredTimes.map((timeOption) => (
                            <option key={timeOption} value={timeOption}>
                                {timeOption}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Guests Field */}
                <div className="form-group">
                    <label htmlFor="guests">Number of guests</label>
                    <input
                        type="number"
                        id="guests"
                        name="guests"
                        min="1"
                        max="10"
                        value={guests}
                        onChange={(e) => setGuests(parseInt(e.target.value))}
                        required
                    />
                </div>

                {/* Occasion Field */}
                <div className="form-group">
                    <label htmlFor="occasion">Occasion</label>
                    <select
                        id="occasion"
                        name="occasion"
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
                <button type="submit" className="submit-button">
                    Submit
                </button>
            </form>

            {/* Table to Display Booking Data */}
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
        </>
    );
}