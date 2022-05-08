import express from 'express';
import { getVolunteer, addVolunteer, getVolunteerById, editVolunteer, deleteVolunteer } from '../controller/volunteer.controller.js';

const volunteerRouter = express.Router();

volunteerRouter.get('/', getVolunteer);
volunteerRouter.post('/add', addVolunteer);
volunteerRouter.get('/:id', getVolunteerById);
volunteerRouter.delete('/:id', deleteVolunteer);
volunteerRouter.put('/:id', editVolunteer);

export default volunteerRouter;