import { useLocation, Link } from "react-router-dom";


export default function ConfirmedBookingPage() {
    const location = useLocation();
    const bookingData = location.state?.formData; // Access booking data passed via state

    return (
        <main className="confirmed-main">

            <header>
                <h1 className="confirmed-title">Booking Confirmed</h1>
            </header>

            <section className="next-steps">
                <h2>Next Steps</h2>
                <p>When you arrive at the restaurant, please provide your name and contact number at the host stand. We are excited to serve you.</p>
                <p>Need to make another reservation? <Link className="booking-link" to="/booking">Click here</Link> to go to the Reservations page.</p>
            </section>

            <section className="confirmed-section">
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
            </section>

        </main>
    );
}