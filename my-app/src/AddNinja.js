import React, { Component} from 'react'

class AddNinja extends Component{
    state = {
        name: null,
        age: null,
        belt: null
    }

    handleChange = (e) => {
        this.setState({
            //e.target.id hace referencia al id que se usa en el input del formulario
            //e.target.value hace referencia al valor de entrada en el input que esta escribiendo el usuario
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    render(){
        return(
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <label htmlFor = "name">Name:</label>
                    <input type = "text" id = "name" onChange = {this.handleChange} />
                    <label htmlFor = "age">Age:</label>
                    <input type = "text" id = "age" onChange = {this.handleChange} />
                    <label htmlFor = "belt">Belt:</label>
                    <input type = "text" id = "belt" onChange = {this.handleChange} />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default AddNinja;