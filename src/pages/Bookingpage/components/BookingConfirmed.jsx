import React from "react";
import { useNavigate } from "react-router-dom";

export default function BookingConfirmed() {

    const navigate = useNavigate();

    const considerations = [
        { text: 'In case of cancellation, maximum 3 hours before.' },
        { text: 'Stay at place at least 5 minutes before your reservation schedule.' }
    ];

    const handleClick = () => navigate('/');

    return (
        <>
            <div>
                <h1 className="confirmed-title">Done</h1>
                <i className="fa-solid fa-rectangle-list confirmed-icon"></i>
            </div>
            <section className="confirmed-text-container">
                <p>Congratulations, your reservation is done.</p>
                <p>Considerations to keep in mind:</p>
                <ul className="considerations-list">
                    {
                        considerations ? considerations.map(consideration => {
                            return <li>{consideration.text}</li>
                        }) : ''
                    }
                </ul>
                <button onClick={handleClick}>Go back to homepage</button>
            </section>
        </>
    );
}