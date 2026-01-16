import React from 'react'
import Logo from '../assets/logo.png'
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className=' py-31'>
            <div className="container-fluid p-32">
                <nav className='row justify-content-between'>
                    <div className='col-md-3'>
                        <a className="navbar-brand" href="#">
                            <img src={Logo} alt="logo" width="120" />
                        </a>

                    </div>
                    <div className='col-md-9'>
                        <ul className={`justify-content-end nav-menu ${isOpen ? "open" : ""}`}>
                            <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
                            <li><Link to="/About" onClick={() => setIsOpen(false)}>About</Link></li>
                            <li><Link to="/Services" onClick={() => setIsOpen(false)}>Services</Link></li>
                            <li className='contact'><Link to="/Contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
                        </ul>

                        <div
                            className={`hamburger ${isOpen ? "active" : ""}`}
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>

                </nav>





            </div>
        </header>
    )
}

export default Header
