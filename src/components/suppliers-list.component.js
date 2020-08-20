import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import './../supplier-List.css'

const Supplier = props => (
  <tr className="form-group">
    <td className='form-a'>{props.supplier.SupplierName}</td>
    <td className='form-a'>{props.supplier.Address}</td>
    <td className='form-a'>{props.supplier.TelephoneNumber}</td>
    <td className='form-a'>{props.supplier.EmailAddresses.map((email) => email + ', ')}</td>
    <td className='form-a'>{props.supplier.KerridgeAccount}</td> 
    {
      props.supplier.PaysCourier ? 
      <td className='form-truth'>{props.supplier.PaysCourier.toString()}</td>: 
      <td className='form-false'>{props.supplier.PaysCourier.toString()}</td>
    }
    <td className='form-a'>{props.supplier.description}</td>
    <td className='form-a'>{props.supplier.Sla}</td>
    <td className='form-a'>{props.supplier.Outlets.map((outl) => outl + ', ')}</td>
    <td className='form-a'>{props.supplier.VehicleMakes.map((vmake) => vmake + ', ')}</td>
    {
      props.supplier.Active ? 
      <td className='form-truth'>{props.supplier.Active.toString()}</td>: 
      <td className='form-false'>{props.supplier.Active.toString()}</td>
    }
    <td className='form-a'>
      <Link to={"/edit/"+props.supplier._id}>edit</Link> | <a href="#" onClick={() => { props.deleteSupplier(props.supplier._id) }}>delete</a>
    </td>
  </tr>
)

export default class SuppliersList extends Component {
  constructor(props) {
    super(props);

    this.deleteSupplier = this.deleteSupplier.bind(this)

    this.state = {suppliers: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/suppliers/')
      .then(response => {
        this.setState({ suppliers: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteSupplier(id) {
    axios.delete('http://localhost:5000/suppliers/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      suppliers: this.state.suppliers.filter(el => el._id !== id)
    })
  }

  supplierList() {
    return this.state.suppliers.map(currentsupplier => {
      return <Supplier supplier={currentsupplier} deleteSupplier={this.deleteSupplier} key={currentsupplier._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Logged Suppliers</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>SupplierName</th>
              <th>Address</th>
              <th>TelephoneNumber</th>
              <th>EmailAddresses</th>
              <th>KerridgeAccount</th>
              <th>PaysCourier</th>
              <th>Description</th>
              <th>Sla</th>
              <th>Outlets</th>
              <th>VehicleMakes</th>
              <th>Active</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.supplierList() }
          </tbody>
        </table>
      </div>
    )
  }
}