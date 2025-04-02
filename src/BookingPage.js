import React, { useReducer, useState, useEffect } from 'react';
import BookingForm from './BookingForm';
import { fetchAPI, submitAPI } from './api'; // Import fetchAPI and submitAPI
import { useNavigate } from "react-router-dom";
import { initializeTimes, updateTimes } from './bookingUtils';

export default function BookingPage() {
    const navigate = useNavigate();

    // Use useReducer for availableTimes
    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

    // State to store booking data
    const [bookingData, setBookingData] = useState(() => {
        // Load initial data from localStorage
        const savedData = localStorage.getItem('bookingData');
        return savedData ? JSON.parse(savedData) : [];
    });

    // Save bookingData to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('bookingData', JSON.stringify(bookingData));
    }, [bookingData]);

    // Define the submitForm function
    function submitForm(formData) {
        const isSubmitted = submitAPI(formData);

        if (isSubmitted) {
            // Add the new booking to the bookingData array
            setBookingData((prevData) => {
                const updatedData = [...prevData, formData];
                console.log('Updated Booking Data:', updatedData); // Debugging
                // Navigate to the confirmation page and pass the updated bookingData
                navigate("/confirmed", { state: { formData, bookingData: updatedData } });
                return updatedData;
            });
        } else {
            alert("Failed to submit the reservation. Please try again.");
        }
    }

    return (
        <>
            <h1>Book A Reservation</h1>
            {/* Pass availableTimes, dispatch, submitForm, and bookingData as props */}
            <BookingForm
                availableTimes={availableTimes}
                dispatch={dispatch}
                submitForm={submitForm}
                bookingData={bookingData}
            />
        </>
    );
}