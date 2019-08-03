import React, { Component } from 'react';
import axios from 'axios';

export default class Create extends Component {

    constructor(props) {
        super(props);
        this.onChangeClientName = this.onChangeClientName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
  
        this.state = {
            first_name: '',
            last_name: '',
            phone_number:''
        }
    }

    onChangeClientName(e) {
        this.setState({
            first_name: e.target.value
        });
    }

    onChangeLastName(e) {
        this.setState({
            last_name: e.target.value
        })  
    }

    onChangePhoneNumber(e) {
        this.setState({
            phone_number: e.target.value
        })
    }
  
    onSubmit(e) {
        e.preventDefault();
        const obj = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            phone_number: this.state.phone_number
        };
        axios.post('http://localhost:3001/api/client/new', obj)
        .then(res => {
            this.props.history.push('/index');            
        });
        console.log(`The values are ${this.state.first_name}, ${this.state.last_name}, and ${this.state.phone_number}`)
        this.setState({
            first_name: '',
            last_name: '',
            phone_number: ''
        })
    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
              <h3>Nuevo Cliente</h3>
              <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                      <label>Nombre:  </label>
                      <input 
                        type="text" 
                        className="form-control" 
                        value={this.state.first_name}
                        onChange={this.onChangeClientName}
                        />
                  </div>
                  <div className="form-group">
                      <label>Apellido: </label>
                      <input type="text" 
                        className="form-control"
                        value={this.state.last_name}
                        onChange={this.onChangeLastName}
                        />
                  </div>
                  <div className="form-group">
                      <label>Numero de Telefono: </label>
                      <input type="number" 
                        className="form-control"
                        value={this.state.phone_number}
                        onChange={this.onChangePhoneNumber}
                        />
                  </div>
                  <div className="form-group">
                      <input type="submit" value="Registrar" className="btn btn-primary"/>
                  </div>
              </form>
          </div>
        )
    }
}