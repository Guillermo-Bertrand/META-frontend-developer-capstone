import React from "react";
import "../../styles/Notfound.css";
import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {

    const navigate = useNavigate();
    const handleClick = () => navigate('/');

    return (
        <main className="not-found-container">
            <div>
                <h1>The resource you requested was not found!</h1>
                <i className="fa-regular fa-circle-xmark"></i>
            </div>
            <button onClick={handleClick}>Go back to homepage</button>
        </main>
    );
}