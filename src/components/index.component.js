import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './tableRow';

export default class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {client: []};
    }

    componentDidMount(){
        axios.get('http://localhost:3001/api/client/all')
        .then(response => {
            this.setState({ client: response.data });
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    tabRow(){
        return this.state.client.map(function(object, i) {
            return <TableRow obj={object} key={i} />;
        });
    }

    render() {
        return (
            <div>
                <h3 align="center">Lista de Clientes</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Teléfono</th>
                            <th colSpan="2">Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.tabRow() }
                    </tbody>
                </table>
            </div>
        )
    }
}