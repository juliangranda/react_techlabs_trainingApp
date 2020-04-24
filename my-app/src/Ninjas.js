import React, { Component} from 'react';

//new component
class Ninjas extends Component{
    render(){

        //uso de props(propiedades del componente)
        //console.log(this.props);
        return(
            <div className = "ninja">
                <div>Name: { this.props.name }</div>
                <div>Age: { this.props.age }</div>
                <div>Belt: { this.props.belt }</div>
            </div>
        )
    }
}

//export the component important
export default Ninjas;

//when we import the component in the main component
//we use < Ninjas />