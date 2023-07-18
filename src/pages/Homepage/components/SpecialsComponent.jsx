import React from "react";
import { LoremIpsum } from 'react-lorem-ipsum';

export default function SpecialsComponent() {
    return (
        <section className="specials-container">
            <div className="specials-header">
                <h2>Specials</h2>
                <button>See menu</button>
            </div>
            <div className="special-orders-container">
                <div className="card-order">
                    <img className="order-image" src="/assets/order1.jpg" alt="order1.jpg" />
                    <div className="order-info">
                        <div className="order-data-container">
                            <h3>Name</h3>
                            <p>Price</p>
                        </div>
                        <LoremIpsum />
                    </div>
                </div>
                <div className="card-order">
                    <img className="order-image" src="/assets/order2.jpg" alt="order2.jpg" />
                    <div className="order-info">
                        <div className="order-data-container">
                            <h3>Name</h3>
                            <p>Price</p>
                        </div>
                        <LoremIpsum />
                    </div>
                </div>
                <div className="card-order">
                    <img className="order-image" src="/assets/order3.jpg" alt="order3.jpg" />
                    <div className="order-info">
                        <div className="order-data-container">
                            <h3>Name</h3>
                            <p>Price</p>
                        </div>
                        <LoremIpsum />
                    </div>
                </div>
            </div>
        </section>
    );
}