//Get all imports
import admin from '../model/adminmodel.js'

// Get all donations
export const getadmin = async (request, response) => {
    try{
        // finding something inside a model is time taking, so we need to add await
        const Login = await admin.find();
        response.status(200).json(Login);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}

// Save data of the Admin in the database
export const addadmin = async (request, response) => {
    // Getting the information of Volunteer from frontend
    const Login = request.body;
    console.log("inside")

    const newLogin = new admin(Login);
    try{
        await newLogin.save();
        response.status(201).json(newLogin);
    } catch (error){
        response.status(409).json({ message: error.message });     
    }
}

// Get a Admin by their ID
export const getadminById = async (request, response) => {
    try{
        const Login = await admin.findById(request.params.id);
        response.status(200).json(Login);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}

// deleting data of admin from the db
export const deleteadmin = async (request, response) => {
    try{
        await admin.deleteOne({_id: request.params.id});
        response.status(201).json("Admin deleted Successfully...!!!");
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}
