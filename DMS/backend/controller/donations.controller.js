import Donation from '../model/donations.model.js';

// Get all donations
export const getDonations = async (request, response) => {
    try{
        // finding something inside a model is time taking, so we need to add await
        const donations = await Donation.find();
        response.status(200).json(donations);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}

// Save data of the donation in database
export const addDonation = async (request, response) => {
    // retreive the info of donation from frontend
    const donation = request.body;
    console.log("inside")

    const newDonation = new Donation(donation);
    try{
        await newDonation.save();
        response.status(201).json(newDonation);
    } catch (error){
        response.status(409).json({ message: error.message });     
    }
}

// Get a donation by id
export const getDonationById = async (request, response) => {
    try{
        const donation = await Donation.findById(request.params.id);
        response.status(200).json(donation);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}

// Save data of edited donation in the database
export const editDonation = async (request, response) => {
    let donation = await Donation.findById(request.params.id);
    donation = request.body;

    const editDonation = new Donation(donation);
    try{
        await Donation.updateOne({_id: request.params.id}, editDonation);
        response.status(201).json(editDonation);
    } catch (error){
        response.status(409).json({ message: error.message });     
    }
}

// deleting data of donation from the database
export const deleteDonation = async (request, response) => {
    try{
        await Donation.deleteOne({_id: request.params.id});
        response.status(201).json("Donation deleted Successfully");
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}