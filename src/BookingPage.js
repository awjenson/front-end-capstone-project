import React from 'react';
import Nav from './Nav';
import BookingForm from './BookingForm';
import Footer from './Footer';

export default function BookingPage() {
    return (
        // <></> is a React fragment.
        // It allows you to group multiple children elements without adding extra nodes to the DOM.
        <>

            <BookingForm />

        </>
    );
};
