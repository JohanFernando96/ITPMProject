import Feedback from '../model/feedbacks.mode.js';

// Get all feedbacks
export const getFeedbacks = async (request, response) => {
    try{
        // finding something inside a model is time taking, so we need to add await
        const feedbacks = await Feedback.find();
        response.status(200).json(feedbacks);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}

// Save data of the feedback in database
export const addFeedback = async (request, response) => {
    // retreive the info of feedback from frontend
    const feedback = request.body;
    console.log("inside")

    const newFeedback = new Feedback(feedback);
    try{
        await newFeedback.save();
        response.status(201).json(newFeedback);
    } catch (error){
        response.status(409).json({ message: error.message });     
    }
}

// Get a feedback by id
export const getFeedbackById = async (request, response) => {
    try{
        const feedback = await Feedback.findById(request.params.id);
        response.status(200).json(feedback);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}

// Save data of edited feedback in the database
export const editFeedback = async (request, response) => {
    let feedback = await Feedback.findById(request.params.id);
    feedback = request.body;

    const editfeedback = new Feedback(feedback);
    try{
        await Feedback.updateOne({_id: request.params.id}, editFeedback);
        response.status(201).json(editFeedback);
    } catch (error){
        response.status(409).json({ message: error.message });     
    }
}

// deleting data of feedback from the database
export const deleteFeedback = async (request, response) => {
    try{
        await Feedback.deleteOne({_id: request.params.id});
        response.status(201).json("Feedback deleted Successfully");
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}