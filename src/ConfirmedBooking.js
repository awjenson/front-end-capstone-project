import { useLocation } from "react-router-dom";

export default function ConfirmedBooking() {
    const location = useLocation();
    const bookingData = location.state?.formData; // Access booking data passed via state

    return (
        <main className="confirmed-main">
            <p className="title confirmed-title">Booking Confirmed!!!</p>
            <p className="subtitle confirmed-subtitle">
                Please provide your name and contact number at the reception upon arrival.
            </p>
            <p className="subtitle confirmed-subtitle">We are excited to serve you!</p>

            {/* Display booking details if available */}
            {bookingData && (
                <div className="booking-details">
                    <h2>Your Booking Details</h2>
                    <p><strong>Date:</strong> {bookingData.date}</p>
                    <p><strong>Time:</strong> {bookingData.time}</p>
                    <p><strong>Guests:</strong> {bookingData.guests}</p>
                    <p><strong>Occasion:</strong> {bookingData.occasion}</p>
                </div>
            )}
        </main>
    );
}