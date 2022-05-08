//importing models
import Disaster from "../model/disaster.model.js";

//############# get disaster
export const getDisasters = async (request, response) => {
  try {
    //testing
    //response.send("get disaster is working on /");
    let disaster = await Disaster.find();
    response.json(disaster);
  } catch (error) {
    response.json({ message: error.message });
  }
};
