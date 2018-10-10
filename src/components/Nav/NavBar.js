import React from 'react';
import '../../styles/page-style.css';
import Score from './Score';

const NavBar = (props) => (
    <nav className="navbar navbar-style">
        <span className="navbar-item mb-0 h3 col-4 align-center"><strong>Clicky Game</strong></span>
        <span className="navbar-item mb-0 h3 col-4 align-center">Click an image to begin!</span>
        <Score state={props.state} />
    </nav>
)

export default NavBar;