import Inventory from '../model/inventories.model.js';

// Get all inventorys
export const getInventories = async (request, response) => {
    try{
        // finding something inside a model is time taking, so we need to add await
        const inventories = await Inventory.find();
        response.status(200).json(inventories);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}

// Save data of the inventory in database
export const addInventory = async (request, response) => {
    // retreive the info of inventory from frontend
    const inventory = request.body;
    console.log("inside")

    const newInventory = new Inventory(inventory);
    try{
        await newInventory.save();
        response.status(201).json(newInventory);
    } catch (error){
        response.status(409).json({ message: error.message });     
    }
}

// Get a inventory by id
export const getInventoryById = async (request, response) => {
    try{
        const inventory = await Inventory.findById(request.params.id);
        response.status(200).json(inventory);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}

// Save data of edited inventory in the database
export const editInventory = async (request, response) => {
    let inventory = await Inventory.findById(request.params.id);
    inventory = request.body;

    const editInventory = new Inventory(inventory);
    try{
        await Inventory.updateOne({_id: request.params.id}, editInventory);
        response.status(201).json(editInventory);
    } catch (error){
        response.status(409).json({ message: error.message });     
    }
}

// deleting data of inventory from the database
export const deleteInventory = async (request, response) => {
    try{
        await Inventory.deleteOne({_id: request.params.id});
        response.status(201).json("Inventory deleted Successfully...!!!");
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}