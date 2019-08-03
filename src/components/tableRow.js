import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TableRow extends Component {

    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }

    delete() {
        axios.delete('http://localhost:3001/api/client/delete/' + this.props.obj._id)
        .then(res=> {
            console.log('deleted')
            this.props.history.push('/index'); 
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <tr>
                <td>
                    {this.props.obj.first_name}
                </td>
                <td>
                    {this.props.obj.last_name}
                </td>
                <td>
                    {this.props.obj.phone_number}
                </td>
            <td>
                <Link to={"/edit/"+this.props.obj._id} className="btn btn-primary">Editar</Link>
            </td>
                <td>
                    <button onClick={this.delete} className="btn btn-danger">Eliminar</button>
                </td>
            </tr>
        );
    }
}

export default TableRow;