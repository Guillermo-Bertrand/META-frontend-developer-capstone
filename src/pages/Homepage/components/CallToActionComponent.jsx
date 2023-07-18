import React from "react";
import { Link } from "react-router-dom";
import { LoremIpsum } from 'react-lorem-ipsum';

export default function CallToActionComponent() {
    return (
        <section className="call-to-action-container">
            <div className="title-container">
                <div>
                    <h1>Little Lemon</h1>
                    <h5>Chicago</h5>
                </div>
                <div>
                    <LoremIpsum p={1} />
                </div>
                <Link to='/booking' className="btn">Reserve a table</Link>
            </div>
            <div className="title-image-container">
                <img className="banner-image" src="/assets/banner.jpg" alt="banner.png" />
            </div>
        </section>
    );
}