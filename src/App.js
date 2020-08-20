import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component"
import SupplierList from "./components/suppliers-list.component";
import EditSupplier from "./components/edit-supplier.component";
import CreateSupplier from "./components/create-supplier.component";

import './App.css'
import '@progress/kendo-theme-default/dist/all.css';

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={SupplierList} />
      <Route path="/edit/:id" component={EditSupplier} />
      <Route path="/create" component={CreateSupplier} />
      </div>
    </Router>
  );
}

export default App;