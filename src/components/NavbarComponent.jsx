import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import scrollUp from '../utils/scrollUp';

export default function NavbarComponent() {

    const [isOpened, setIsOpened] = useState(false);
    const triggerMenu = () => {
        setIsOpened(!isOpened);
        //And scroll.
        scrollUp();
    };

    return (
        <header>
            <nav>
                <Link to="/" className="logo-link">
                    <img className="logo" src="/assets/Asset 16@4x.png" alt="Asset 16@4x.png" />
                </Link>
                <div className="links-container">
                    <NavLink to="/" className={({ isActive }) => isActive ? 'link active-link' : 'link'}>Home</NavLink>
                    <NavLink to="/about" className={({ isActive }) => isActive ? 'link active-link' : 'link'}>About</NavLink>
                    <NavLink to="/menu" className={({ isActive }) => isActive ? 'link active-link' : 'link'}>Menu</NavLink>
                    <NavLink to="/booking" className={({ isActive }) => isActive ? 'link active-link' : 'link'}>Reservations</NavLink>
                    <NavLink to="/order-online" className={({ isActive }) => isActive ? 'link active-link' : 'link'}>Order online</NavLink>
                    <NavLink to="/login" className={({ isActive }) => isActive ? 'link active-link' : 'link'}>Login</NavLink>
                </div>
                <div className={isOpened ? "side-links-trigger triggered-to-open" : "side-links-trigger triggered-to-close"} onClick={triggerMenu}>
                    <i className="fa-solid fa-bars"></i>
                </div>
            </nav>
            <div className={isOpened ? "side-links-container side-opened" : "side-links-container side-closed"}>
                <NavLink to="/" className={({ isActive }) => isActive ? 'link active-link' : 'link'} onClick={triggerMenu}>
                    <i className="fa-solid fa-house"></i>
                    <p>Home</p>
                </NavLink>
                <NavLink to="/about" className={({ isActive }) => isActive ? 'link active-link' : 'link'} onClick={triggerMenu}>
                    <i className="fa-solid fa-circle-info"></i>
                    <p>About</p>
                </NavLink>
                <NavLink to="/menu" className={({ isActive }) => isActive ? 'link active-link' : 'link'} onClick={triggerMenu}>
                    <i className="fa-solid fa-utensils"></i>
                    <p>Menu</p>
                </NavLink>
                <NavLink to="/booking" className={({ isActive }) => isActive ? 'link active-link' : 'link'} onClick={triggerMenu}>
                    <i className="fa-solid fa-table"></i>
                    <p>Reservations</p>
                </NavLink>
                <NavLink to="/order-online" className={({ isActive }) => isActive ? 'link active-link' : 'link'} onClick={triggerMenu}>
                    <i className="fa-solid fa-motorcycle"></i>
                    <p>Order online</p>
                </NavLink>
                <NavLink to="/login" className={({ isActive }) => isActive ? 'link active-link' : 'link'} onClick={triggerMenu}>
                    <i className="fa-solid fa-right-to-bracket"></i>
                    <p>Login</p>
                </NavLink>

            </div>
        </header>
    );
}