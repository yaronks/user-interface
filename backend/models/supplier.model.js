const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const supplierSchema = new Schema({
  SupplierName: {type: String, required: true },
  Address: { type: String, required: true },
  TelephoneNumber: { type: String, required: true },
  EmailAddresses: [String],
  KerridgeAccount: { type: String, required: true },
  PaysCourier: { type: Boolean, required: true },
  description: { type: String, required: false },
  Sla: { type: Number, required: true },
  Outlets: [String],
  VehicleMakes: [String],
  Active: { type: Boolean, required: true },
},
);

const Supplier = mongoose.model('Supplier', supplierSchema);

module.exports = Supplier;