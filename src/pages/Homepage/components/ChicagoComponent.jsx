import React from "react";
import LoremIpsum from "react-lorem-ipsum";

export default function ChicagoComponent() {
    return (
        <section className="chicago-container">
            <div className="chicago-title-container">
                <div>
                    <h1>Little Lemon</h1>
                    <h5>Chicago</h5>
                </div>
                <div>
                    <LoremIpsum p={1} />
                </div>
            </div>
            <div className="image-container">
                <img className="author-image" src="/assets/adrian.jpeg" alt="Adrian.png" />
            </div>
            <div className="image-container">
                <img className="author-image" src="/assets/mario.jpg" alt="Mario.png" />
            </div>
        </section>
    );
}