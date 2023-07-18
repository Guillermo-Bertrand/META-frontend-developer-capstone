import React from "react";
import { LoremIpsum } from 'react-lorem-ipsum';

function CustomerCard({ name, imgSrc, comment }) {
    return <div className="customer-card">
        <h4>{name}</h4>
        <img className="customer-image" src={`/assets/${imgSrc}`} alt={imgSrc} />
        {
            comment !== '' ? comment : <LoremIpsum />
        }
    </div>
}

export default function CustomersSayComponent() {

    const customers = [
        { name: 'Name', imgSrc: 'person1.jpg', comment: '' },
        { name: 'Name2', imgSrc: 'person2.jpg', comment: '' },
        { name: 'Name2', imgSrc: 'person3.jpg', comment: '' },
        { name: 'Name2', imgSrc: 'person4.jpg', comment: '' }
    ];

    return (
        <section className="customers-say-container">
            <h2 className="customers-say-title">Testimonials</h2>
            <div className="customers-container">
                {
                    customers ? customers.map((customer, index) => {
                        return <CustomerCard key={index} name={customer.name} imgSrc={customer.imgSrc} comment={customer.comment} />
                    }) : ''
                }
            </div>
        </section>
    );
}