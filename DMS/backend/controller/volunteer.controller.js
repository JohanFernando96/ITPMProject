//Get all imports
import Volunteer from '../model/volunteer.model.js';

// Get all volunteer details
export const getVolunteer = async (request, response) => {
    try{
        // finding something inside a model is time taking, so we need to add await
        const volunteer = await Volunteer.find();
        response.status(200).json(volunteer);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}

// Save data of the volunteers in database
export const addVolunteer = async (request, response) => {
    // retreive the information of Volunteers from the frontend
    const volunteer = request.body;
    console.log("inside")

    const newVolunteer = new Volunteer(volunteer);
    try{
        await newVolunteer.save();
        response.status(201).json(newVolunteer);
    } catch (error){
        response.status(409).json({ message: error.message });     
    }
}

// Get the volunteers by their ID
export const getVolunteerById = async (request, response) => {
    try{
        const volunteer = await Volunteer.findById(request.params.id);
        response.status(200).json(volunteer);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}

// Save data of updated volunteers in the database
export const editVolunteer = async (request, response) => {
    let volunteer = await Volunteer.findById(request.params.id);
    volunteer = request.body;

    const editVolunteer = new Volunteer(volunteer);
    try{
        await Volunteer.updateOne({_id: request.params.id}, editVolunteer);
        response.status(201).json(editVolunteer);
    } catch (error){
        response.status(409).json({ message: error.message });     
    }
}

// deleting data of the volunteers from the database
export const deleteVolunteer = async (request, response) => {
    try{
        await Volunteer.deleteOne({_id: request.params.id});
        response.status(201).json("Volunteer details deleted Successfully...!!!");
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}