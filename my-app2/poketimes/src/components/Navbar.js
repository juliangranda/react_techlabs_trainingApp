import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom'

//withRouter se utiliza para sobrealimentar las props del componente
//esto con el fin de que el navbar tenga props antes de utilizar los componentes para redireccionar

const Navbar = (props) => {
    //redireccionamiento desde navbar
    setTimeout(() => {
        props.history.push('/about')
    }, 5000)

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
export default withRouter(Navbar);


//para llevar acabo el router se debe instalar el siguiente paquete
//npm install react-router-dom