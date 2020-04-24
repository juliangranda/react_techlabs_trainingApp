import React, { Component }from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component{
  state = {
    ninjas : [
      { name: 'Ryu', age: 30, belt: 'black', id: 1},
      { name: 'Yoshi', age: 20, belt: 'green', id: 2},
      { name: 'Crystal', age: 25, belt: 'pink', id: 3},
    ]
  }
  addNinja = (ninja) => {
    //console.log(ninja);
    ninja.id = Math.random();
    //... significa que esta haciendo una copia de esa matriz y el otro elemento es el que se esta 
    //añadiendo a la matriz ninjas que se clono para no destruir la anterior
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas
    })
  }
  render(){
    return(
      <div className="App">
      <h1>my first react app</h1>
      <p>welcome =D</p>

      
      <Ninjas ninjas = { this.state.ninjas }/>
      <AddNinja addNinja = { this.addNinja }/>
    </div>
    );
  }
}


export default App;

