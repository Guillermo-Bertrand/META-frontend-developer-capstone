import React from "react";
import "../styles/Footer.css";
import { NavLink } from "react-router-dom";
import scrollUp from '../utils/scrollUp';

export default function FooterComponent() {

    const handleClick = () => scrollUp();

    return (
        <footer>
            <div className="logo-container">
                <img className="logo" src="/assets/Asset 18@4x.png" alt="Asset 18@4x.png" />
            </div>
            <div className="navigation-container">
                <NavLink onClick={handleClick} to="/" className={({ isActive }) => isActive ? 'footer-link active-footer-link' : 'footer-link'}>Home</NavLink>
                <NavLink onClick={handleClick} to="/about" className={({ isActive }) => isActive ? 'footer-link active-footer-link' : 'footer-link'}>About</NavLink>
                <NavLink onClick={handleClick} to="/menu" className={({ isActive }) => isActive ? 'footer-link active-footer-link' : 'footer-link'}>Menu</NavLink>
                <NavLink onClick={handleClick} to="/booking" className={({ isActive }) => isActive ? 'footer-link active-footer-link' : 'footer-link'}>Reservations</NavLink>
                <NavLink onClick={handleClick} to="/order-online" className={({ isActive }) => isActive ? 'footer-link active-footer-link' : 'footer-link'}>Order online</NavLink>
                <NavLink onClick={handleClick} to="/login" className={({ isActive }) => isActive ? 'footer-link active-footer-link' : 'footer-link'}>Login</NavLink>
            </div>
            <div className="contact-container">
                <p className="info">Address</p>
                <p className="info">Phone number</p>
                <p className="info">Email</p>
            </div>
            <div className="social-media-container">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-tiktok"></i>
                <i className="fa-brands fa-twitter"></i>
            </div>
        </footer>
    );
}