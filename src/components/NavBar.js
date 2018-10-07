import React from 'react';
import '../styles/page-style.css';
import Score from './Score';

const NavBar = () => (
    <nav className="navbar navbar-style">
        <span className="navbar-item mb-0 h3 col-4 align-center"><strong>Clicky Game</strong></span>
        <span className="navbar-item mb-0 h3 col-4 align-center">Click an image to begin!</span>
        <Score />
    </nav>
)

export default NavBar;