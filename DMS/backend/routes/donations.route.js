import express from 'express';
import { getDonations, addDonation, getDonationById, editDonation, deleteDonation } from '../controller/donations.controller.js';

const route = express.Router();

route.get('/', getDonations);
route.post('/add', addDonation);
route.get('/:id', getDonationById);
route.put('/:id', editDonation);
route.delete('/:id', deleteDonation);

export default route;