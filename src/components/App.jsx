import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavbarComponent from "./NavbarComponent";
import FooterComponent from "./FooterComponent";
import HomePage from "../pages/Homepage/HomePage";
import BookingPage from "../pages/Bookingpage/BookingPage";
import BookingForm from "../pages/Bookingpage/components/BookingForm";
import BookingConfirmed from "../pages/Bookingpage/components/BookingConfirmed";
import NotFoundPage from "../pages/NotFoundPage.jsx/NotFoundPage";

function App() {
  return (
    <BrowserRouter>

      <NavbarComponent />

      <Routes>

        <Route path="/" element={<HomePage />} />

        <Route path="/booking" element={<BookingPage />}>
          <Route index element={<Navigate to='form' />} />
          <Route path="form" element={<BookingForm />} />
          <Route path="confirmed" element={<BookingConfirmed />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />

      </Routes>

      <FooterComponent />

    </BrowserRouter>
  );
}

export default App;
