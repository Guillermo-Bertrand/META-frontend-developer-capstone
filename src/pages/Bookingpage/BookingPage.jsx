import React from "react";
import { Outlet } from "react-router-dom";
import "../../styles/Bookingpage.css";

export default function BookingPage() {
    return (
        <main className="booking-page-container">
            <Outlet />
        </main>
    );
}