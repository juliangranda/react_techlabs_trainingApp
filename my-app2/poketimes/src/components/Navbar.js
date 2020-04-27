import React from 'react';

const Navbar = () => {
    return (
        <nav className = "nav-wrapper red darken-3">
            <div className = "container">
                <a className = "brand-logo">poke times</a>
                <ul className = "right">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;


//para llevar acabo el router se debe instalar el siguiente paquete
//npm install react-router-dom