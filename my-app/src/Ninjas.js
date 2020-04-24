import React, { Component} from 'react';

//new component
class Ninjas extends Component{
    render(){
        return(
            <div className = "ninja">
                <div>Name: Ryu</div>
                <div>Age: 30</div>
                <div>Belt: Black</div>
            </div>
        )
    }
}

//export the component important
export default Ninjas;

//when we import the component in the main component
//we use < Ninjas />