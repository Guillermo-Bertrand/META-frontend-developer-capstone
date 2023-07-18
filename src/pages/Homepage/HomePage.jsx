import React from "react";
import CallToActionComponent from "./components/CallToActionComponent";
import SpecialsComponent from "./components/SpecialsComponent";
import CustomersSayComponent from "./components/CustomersSayComponent";
import ChicagoComponent from "./components/ChicagoComponent";
import "../../styles/Homepage.css";

export default function HomePage() {
    return (
        <main className="home-page-container">
            <CallToActionComponent />
            <SpecialsComponent />
            <CustomersSayComponent />
            <ChicagoComponent />
        </main>
    );
}