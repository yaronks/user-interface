const router = require('express').Router();
let Supplier = require('../models/supplier.model');

router.route('/').get((req, res) => {
  Supplier.find()
    .then(suppliers => res.json(suppliers))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const SupplierName = req.body.SupplierName;
  const Address = req.body.Address;
  const TelephoneNumber = req.body.TelephoneNumber;
  const EmailAddresses = req.body.EmailAddresses;
  const KerridgeAccount = req.body.KerridgeAccount;
  const PaysCourier = Boolean(req.body.PaysCourier);
  const description = req.body.description;
  const Sla = Number(req.body.Sla);
  const Outlets = req.body.Outlets;
  const VehicleMakes = req.body.VehicleMakes;
  const Active = Boolean(req.body.Active);

  const newSupplier = new Supplier({
    SupplierName,
    Address,
    TelephoneNumber,
    EmailAddresses,
    KerridgeAccount,
    PaysCourier,
    description,
    Sla,
    Outlets,
    VehicleMakes,
    Active,
  });

  newSupplier.save()
  .then(() => res.json('Supplier added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Supplier.findById(req.params.id)
    .then(supplier => res.json(supplier))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Supplier.findByIdAndDelete(req.params.id)
    .then(() => res.json('Supplier deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Supplier.findById(req.params.id)
    .then(supplier => {
      supplier.SupplierName = req.body.SupplierName;
      supplier.Address = req.body.Address;
      supplier.TelephoneNumber = req.body.TelephoneNumber;
      supplier.EmailAddresses = req.body.EmailAddresses;
      supplier.KerridgeAccount = req.body.KerridgeAccount;
      supplier.PaysCourier = Boolean(req.body.PaysCourier);
      supplier.description = req.body.description;
      supplier.Sla = Number(req.body.Sla);
      supplier.Outlets = req.body.Outlets;
      supplier.VehicleMakes = req.body.VehicleMakes;
      supplier.Active = Boolean(req.body.Active);

      supplier.save()
        .then(() => res.json('Supplier updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;