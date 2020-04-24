import React, { Component} from 'react';

//new component
class Ninjas extends Component{
    render(){

        //uso de props(propiedades del componente)
        //console.log(this.props);

        //desestructuracion
        //const { name, age, belt} = this.props;

        //outputting list
        const { ninjas } = this.props
        const ninjaList = ninjas.map( ninja => {
            return(
                <div className = "ninja" key = { ninja.id} >
                    <div>Name: { ninja.name }</div>
                    <div>Age: { ninja.age }</div>
                    <div>Belt: { ninja.belt }</div>
                </div>
            )
        })
        


        return(
            <div className = "ninja-list">
                { ninjaList }
            </div>
        )

    }
}

//export the component important
export default Ninjas;

//when we import the component in the main component
//we use < Ninjas />