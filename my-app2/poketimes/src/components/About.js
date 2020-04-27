import React from 'react';

//se importa componente de orden superior
import Rainbow from '../hoc/Rainbow';
const About = () => {

    return (
        <div className = "container">
            <h4 className = "center">About</h4>
            <p>contenido random</p>
        </div>
    )
}

export default Rainbow(About);