import React, { Component} from 'react';

//new component
class Ninjas extends Component{
    render(){

        //uso de props(propiedades del componente)
        //console.log(this.props);

        //desestructuracion
        const { name, age, belt} = this.props;
        return(
            <div className = "ninja">
                <div>Name: { name }</div>
                <div>Age: { age }</div>
                <div>Belt: { belt }</div>
            </div>
        )
    }
}

//export the component important
export default Ninjas;

//when we import the component in the main component
//we use < Ninjas />