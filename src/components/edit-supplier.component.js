import React, { Component } from 'react';
import axios from 'axios';
import './../supplier-List.css'

export default class EditSupplier extends Component {
  constructor(props) {
    super(props);

    this.onChangeSupplierName = this.onChangeSupplierName.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeTelephoneNumber = this.onChangeTelephoneNumber.bind(this);
    this.onChangeEmailAddressesA = this.onChangeEmailAddressesA.bind(this);
    this.onChangeEmailAddressesB = this.onChangeEmailAddressesB.bind(this);
    this.onChangeEmailAddressesC = this.onChangeEmailAddressesC.bind(this);
    this.onChangeEmailAddressesD = this.onChangeEmailAddressesD.bind(this);
    this.onChangeEmailAddressesE = this.onChangeEmailAddressesE.bind(this);
    this.onChangeKerridgeAccount = this.onChangeKerridgeAccount.bind(this);
    this.onChangePaysCourier = this.onChangePaysCourier.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeSla = this.onChangeSla.bind(this);
    this.onChangeOutlets = this.onChangeOutlets.bind(this);
    this.onChangeOutletsB = this.onChangeOutletsB.bind(this);
    this.onChangeOutletsC = this.onChangeOutletsC.bind(this);
    this.onChangeOutletsD = this.onChangeOutletsD.bind(this);
    this.onChangeOutletsE = this.onChangeOutletsE.bind(this);
    this.onChangeVehicleMakes = this.onChangeVehicleMakes.bind(this);
    this.onChangeVehicleMakesB = this.onChangeVehicleMakesB.bind(this);
    this.onChangeVehicleMakesC = this.onChangeVehicleMakesC.bind(this);
    this.onChangeVehicleMakesD = this.onChangeVehicleMakesD.bind(this);
    this.onChangeVehicleMakesE = this.onChangeVehicleMakesE.bind(this);
    this.onChangeActive = this.onChangeActive.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      SupplierName: '',
      Address: '',
      TelephoneNumber: '(000)-000-0000',
      EmailAddresses: [],
      KerridgeAccount: '',
      PaysCourier: false,
      description: '',
      Sla: 0,
      Outlets: [],
      VehicleMakes: [],
      Active: true,
      OutletOptions: [ '', 'National', 'Autoboys Glass Bloomfontein', 'Autoboys Glass Capetown', 'Autoboys Glass Centurion', 'Autoboys Glass Durban', 
      'Autoboys Glass George', 'Autoboys Glass Nelspruit', 'Autoboys Glass Port Elizabeth', 'Autoboys Glass Pretoria', 'Autoboys Glass Southdale',
      'Autoboys Glass Strijdompark', 'Autoboys Glass Vaal'],
      VehicleMakeOptions: ['', 'ABARTH', 'AUDI', 'BMW', 'CADDILAC', 'CHEVROLET', 'CHRYSLER', 'CITROEN', 'DAIHATSU', 'DATSUN', 'DODGE', 'FAW', 'FIAT', 
      'FORD', 'GWM', 'HAVAL', 'HINO', 'HONDA', 'HUMMER', 'HYUNDAI', 'INFINITI', 'ISUZU', 'JAGUAR', 'JEEP', 'KIA', 'LANDROVER', 'LEXUS', 'MAHINDRA', 
      'MAN', 'MAZDA', 'MERCEDES BENZ', 'MINI', 'MITSUBISHI', 'NISSAN', 'OPEL', 'PEUGEOT', 'PORSCHE', 'RENAULT', 'SCANIA', 'SEAT', 'SUBARU', 'SUZUKI', 
      'TATA', 'TOYOTA', 'UD TRUCKS', 'VOLKSWAGEN', 'VOLVO'],
      truth: [true, false]
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/suppliers/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          SupplierName: response.data.SupplierName,
          Address: response.data.Address,
          TelephoneNumber: response.data.TelephoneNumber,
          EmailAddresses: response.data.EmailAddresses,
          KerridgeAccount: response.data.KerridgeAccount,
          PaysCourier: response.data.PaysCourier,
          description: response.data.description,
          Sla: response.data.Sla,
          Outlets: response.data.Outlets,
          VehicleMakes: response.data.VehicleMakes,
          Active: response.data.Active
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

  }

  onChangeSupplierName(e) {
    this.setState({
      SupplierName: e.target.value
    })
  }

  onChangeAddress(e) {
    this.setState({
      Address: e.target.value
    })
  }

  onChangeTelephoneNumber(e) {
    this.setState({
      TelephoneNumber: e.target.value
    })
  }

  onChangeEmailAddressesA(e) {
    let addr = [];
    addr = this.state.EmailAddresses;
    addr[0] = e.target.value;
    this.setState({
        EmailAddresses: addr
    })
  }

  onChangeEmailAddressesB(e) {
    let addr = [];
    addr = this.state.EmailAddresses;
    addr[1] = e.target.value;
    this.setState({
        EmailAddresses: addr
    })
  }

  onChangeEmailAddressesC(e) {
    let addr = [];
    addr = this.state.EmailAddresses;
    addr[2] = e.target.value;
    this.setState({
        EmailAddresses: addr
    })
  }

  onChangeEmailAddressesD(e) {
    let addr = [];
    addr = this.state.EmailAddresses;
    addr[3] = e.target.value;
    this.setState({
        EmailAddresses: addr
    })
  }

  onChangeEmailAddressesE(e) {
    let addr = [];
    addr = this.state.EmailAddresses;
    addr[4] = e.target.value;
    this.setState({
        EmailAddresses: addr
    })
  }

  onChangeKerridgeAccount(e) {
    this.setState({
      KerridgeAccount: e.target.value
    })
  }

  onChangePaysCourier(e) {
    if (e.target.value === 't' || e.target.value === 'T'){
      this.setState({
        PaysCourier: true
      })
    } else if(e.target.value === 'f' || e.target.value === 'F'){
      this.setState({
        PaysCourier: false
      })
    } else {
      this.setState({
        PaysCourier: e.target.value
      })
    }
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }

  onChangeSla(e) {
    this.setState({
      Sla: e.target.value
    })
  }

  onChangeOutlets(e) {
    let outl = [];
    outl = this.state.Outlets;
    outl[0] = e.target.value;
    this.setState({
        Outlets: outl
    })
  }

  onChangeOutletsB(e) {
    let outl = [];
    outl = this.state.Outlets;
    outl[1] = e.target.value;
    this.setState({
        Outlets: outl
    })
  }

  onChangeOutletsC(e) {
    let outl = [];
    outl = this.state.Outlets;
    outl[2] = e.target.value;
    this.setState({
        Outlets: outl
    })
  }

  onChangeOutletsD(e) {
    let outl = [];
    outl = this.state.Outlets;
    outl[3] = e.target.value;
    this.setState({
        Outlets: outl
    })
  }

  onChangeOutletsE(e) {
    let outl = [];
    outl = this.state.Outlets;
    outl[4] = e.target.value;
    this.setState({
        Outlets: outl
    })
  }

  onChangeVehicleMakes(e) {
    let vmake = [];
    vmake = this.state.VehicleMakes;
    vmake[0] = e.target.value;
    this.setState({
        VehicleMakes: vmake
    })
  }

  onChangeVehicleMakesB(e) {
    let vmake = [];
    vmake = this.state.VehicleMakes;
    vmake[1] = e.target.value;
    this.setState({
        VehicleMakes: vmake
    })
  }

  onChangeVehicleMakesC(e) {
    let vmake = [];
    vmake = this.state.VehicleMakes;
    vmake[2] = e.target.value;
    this.setState({
        VehicleMakes: vmake
    })
  }

  onChangeVehicleMakesD(e) {
    let vmake = [];
    vmake = this.state.VehicleMakes;
    vmake[3] = e.target.value;
    this.setState({
        VehicleMakes: vmake
    })
  }

  onChangeVehicleMakesE(e) {
    let vmake = [];
    vmake = this.state.VehicleMakes;
    vmake[4] = e.target.value;
    this.setState({
        VehicleMakes: vmake
    })
  }

  onChangeActive(e) {
    if (e.target.value === 't' || e.target.value === 'T'){
      this.setState({
        Active: true
      })
    } else if(e.target.value === 'f' || e.target.value === 'F'){
      this.setState({
        Active: false
      })
    } else {
      this.setState({
        Active: e.target.value
      })
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const supplier = {
      SupplierName: this.state.SupplierName,
      Address: this.state.Address,
      TelephoneNumber: this.state.TelephoneNumber,
      EmailAddresses: this.state.EmailAddresses,
      KerridgeAccount: this.state.KerridgeAccount,
      PaysCourier: this.state.PaysCourier,
      description: this.state.description,
      Sla: this.state.Sla,
      Outlets: this.state.Outlets,
      VehicleMakes: this.state.VehicleMakes,
      Active: this.state.Active
    }

    console.log(supplier.PaysCourier);
    console.log('works');

    axios.post('http://localhost:5000/suppliers/update/' + this.props.match.params.id, supplier)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>Edit Supplier Log</h3>
      <form onSubmit={this.onSubmit}>
      <div className="form-group"> 
          <label>SupplierName: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.SupplierName}
              onChange={this.onChangeSupplierName}
              />
        </div>
        <div className="form-group"> 
          <label>Address: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.Address}
              onChange={this.onChangeAddress}
              />
        </div>
        <div className="form-group"> 
          <label>TelephoneNumber: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.TelephoneNumber}
              onChange={this.onChangeTelephoneNumber}
              />
        </div>
        <div className="form-group"> 
          <label>EmailAddresses: </label>
          <input  type="email"
              required
              className="form-control"
              value={this.state.EmailAddresses[0]}
              onChange={this.onChangeEmailAddressesA}
              />
          <input  type="email"
              className="form-control"
              value={this.state.EmailAddresses[1]}
              onChange={this.onChangeEmailAddressesB}
            />
          <input  type="email"
              className="form-control"
              value={this.state.EmailAddresses[2]}
              onChange={this.onChangeEmailAddressesC}
              />
          <input  type="email"
              className="form-control"
              value={this.state.EmailAddresses[3]}
              onChange={this.onChangeEmailAddressesD}
              />
          <input  type="email"
              className="form-control"
              value={this.state.EmailAddresses[4]}
              onChange={this.onChangeEmailAddressesE}
              />
        </div>
        <div className="form-group"> 
          <label>KerridgeAccount: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.KerridgeAccount}
              onChange={this.onChangeKerridgeAccount}
              />
        </div>
        <div className="form-group"> 
          <label>PaysCourier (replace with f for false, t for true): </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.PaysCourier}
              onChange={this.onChangePaysCourier}
              />
        </div>
        <div className="form-group"> 
          <label>Description: </label>
          <input  type="text"
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
              />
        </div>
        <div className="form-group">
          <label>Sla: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.Sla}
              onChange={this.onChangeSla}
              />
        </div>
        <div className="form-group">
          <label>Outlets: </label>
          <select
              ref="userInput"
              required
              className="form-control"
              value={this.state.Outlets[0]}
              onChange={this.onChangeOutlets}
            >
              {
                this.state.OutletOptions.map((outlet) => (
                  <option
                    key={outlet}
                  >
                    {outlet}
                  </option>
                ))
              } 
            </select>
            <select
              ref="userInput"
              className="form-control"
              value={this.state.Outlets[1]}
              onChange={this.onChangeOutletsB}
            >
              {
                this.state.OutletOptions.map((outlet) => (
                  <option
                    key={outlet}
                  >
                    {outlet}
                  </option>
                ))
              } 
            </select>
            <select
              ref="userInput"
              className="form-control"
              value={this.state.Outlets[2]}
              onChange={this.onChangeOutletsC}
            >
              {
                this.state.OutletOptions.map((outlet) => (
                  <option
                    key={outlet}
                  >
                    {outlet}
                  </option>
                ))
              } 
            </select>
            <select
              ref="userInput"
              className="form-control"
              value={this.state.Outlets[3]}
              onChange={this.onChangeOutletsD}
            >
              {
                this.state.OutletOptions.map((outlet) => (
                  <option
                    key={outlet}
                  >
                    {outlet}
                  </option>
                ))
              } 
            </select>
            <select
              ref="userInput"
              className="form-control"
              value={this.state.Outlets[4]}
              onChange={this.onChangeOutletsE}
            >
              {
                this.state.OutletOptions.map((outlet) => (
                  <option
                    key={outlet}
                  >
                    {outlet}
                  </option>
                ))
              } 
            </select>
        </div>
        <div className="form-group"> 
          <label>VehicleMakes: </label>
          <select
              ref="userInput"
              required
              className="form-control"
              value={this.state.VehicleMakes[0]}
              onChange={this.onChangeVehicleMakes}
            >
              {
                this.state.VehicleMakeOptions.map((vmake) => (
                  <option
                    key={vmake}
                  >
                    {vmake}
                  </option>
                ))
              } 
            </select>
            <select
              ref="userInput"
              className="form-control"
              value={this.state.VehicleMakes[1]}
              onChange={this.onChangeVehicleMakesB}
            >
              {
                this.state.VehicleMakeOptions.map((vmake) => (
                  <option
                    key={vmake}
                  >
                    {vmake}
                  </option>
                ))
              } 
            </select>
            <select
              ref="userInput"
              className="form-control"
              value={this.state.VehicleMakes[2]}
              onChange={this.onChangeVehicleMakesC}
            >
              {
                this.state.VehicleMakeOptions.map((vmake) => (
                  <option
                    key={vmake}
                  >
                    {vmake}
                  </option>
                ))
              } 
            </select>
            <select
              ref="userInput"
              className="form-control"
              value={this.state.VehicleMakes[3]}
              onChange={this.onChangeVehicleMakesD}
            >
              {
                this.state.VehicleMakeOptions.map((vmake) => (
                  <option
                    key={vmake}
                  >
                    {vmake}
                  </option>
                ))
              } 
            </select>
            <select
              ref="userInput"
              className="form-control"
              value={this.state.VehicleMakes[4]}
              onChange={this.onChangeVehicleMakesE}
            >
              {
                this.state.VehicleMakeOptions.map((vmake) => (
                  <option
                    key={vmake}
                  >
                    {vmake}
                  </option>
                ))
              } 
            </select>
        </div>
        <div className="form-group"> 
          <label>Active (replace with f for false, t for true): </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.Active}
              onChange={this.onChangeActive}
              />
        </div>

        <div className="form-group">
          <input type="submit" value="Edit Supplier Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}