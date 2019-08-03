import React, { Component } from 'react';
import axios from 'axios';

export default class Edit extends Component {

    constructor(props) {
        super(props);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
            first_name: '',
            last_name: '',
            phone_number: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3001/api/client/get/'+this.props.match.params.id)
        .then(response => {
            this.setState({ 
                first_name: response.data.first_name, 
                last_name: response.data.last_name,
                phone_number: response.data.phone_number
            });
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    onChangeFirstName(e) {
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
        axios.put('http://localhost:3001/api/client/update/'+this.props.match.params.id, obj)
        .then(res => {
            console.log(res.data)
            this.props.history.push('/index');
        });
        
        
    }


    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3 align="center">Editar Cliente</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Nombre:  </label>
                        <input 
                        type="text" 
                        className="form-control" 
                        value={this.state.first_name}
                        onChange={this.onChangeFirstName}
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
                        <label>GST Number: </label>
                        <input type="number" 
                        className="form-control"
                        value={this.state.phone_number}
                        onChange={this.onChangePhoneNumber}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" 
                        value="Editar" 
                        className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}