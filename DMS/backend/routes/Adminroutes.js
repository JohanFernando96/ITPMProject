import express from 'express';
import { getadmin, addadmin, getadminById, deleteadmin } from '../controller/Admin.controller.js'

const adminRouter = express.Router();

adminRouter.get('/', getadmin);
adminRouter.post('/add', addadmin);
adminRouter.get('/:id', getadminById);
adminRouter.delete('/:id', deleteadmin);

export default adminRouter;