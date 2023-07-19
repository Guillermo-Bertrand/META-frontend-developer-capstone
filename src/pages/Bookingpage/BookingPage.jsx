import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import "../../styles/Bookingpage.css";

export default function BookingPage() {

    //Available times will pass as props to child components.
    const [availableTimes, setAvailableTimes] = useState([
        { value: '17:00', text: '17:00' }, { value: '18:00', text: '18:00' },
        { value: '19:00', text: '19:00' }, { value: '20:00', text: '20:00' },
        { value: '21:00', text: '21:00' }, { value: '22:00', text: '22:00' }
    ]);

    return (
        <main className="booking-page-container">
            {/* With context pass the props to child components. */}
            <Outlet context={[availableTimes]} />
        </main>
    );
}