import React from 'react';

//Link y NavLiknk son librerias que se usan para el enrutador cuya funcion es evitar solicitudes adicionales al servidor mediante la URl
//lo que permite que sea mas rapido y suave ,haciendo que en vez de una solicitud al servidor simplemente se cambie al componente pedido

//Diferencia entre Link y NavLink
//link solo genera una etiqueta para enlaces  pero navlink lo que hace es trabajar por medio de enlaces o clases activas
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className = "nav-wrapper red darken-3">
            <div className = "container">
                <a className = "brand-logo">poke times</a>
                <ul className = "right">
                    
                    <li><Link to="/">Home</Link></li> 
                    <li><Link to="/about">About</Link></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;


//para llevar acabo el router se debe instalar el siguiente paquete
//npm install react-router-dom