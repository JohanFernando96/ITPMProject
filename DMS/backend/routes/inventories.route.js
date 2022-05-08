import express from 'express';
import { getInventories, addInventory, getInventoryById, editInventory, deleteInventory } from '../controller/inventories.controller.js';

const  inventoriesRouter = express.Router();

inventoriesRouter.get('/', getInventories);
inventoriesRouter.post('/add', addInventory);
inventoriesRouter.get('/:id', getInventoryById);
inventoriesRouter.put('/:id', editInventory);
inventoriesRouter.delete('/:id', deleteInventory);

export default  inventoriesRouter;