import React from 'react'

const Rainbow = (WrappedComponent) => {

    const colours = ['red', 'pink', 'orange', 'blue', 'green', 'yellow'];
    const randomColour = colours[Math.floor(Math.random()*5)];
    const className = randomColour + '-text';


    return (props) => {
        return (
            <div>
                <WrappedComponent {...props} />
            </div>
        )
    }
}

export default Rainbow;

/*
    nota: se crea un componente de orden superior para recubrir a otro componente y añadirle mas props al componente que esta recubriendo el componente de orden superior
*/ 