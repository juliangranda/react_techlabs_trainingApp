import React, { Component }from 'react';
import Ninjas from './Ninjas'


class App extends Component{
  render(){
    return(
      <div className="App">
      <h1>my first react app</h1>
      <p>welcome =D</p>

      
      <Ninjas />
    </div>
    );
  }
}


export default App;

