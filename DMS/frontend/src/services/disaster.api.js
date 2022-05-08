import axios from "axios";
const url = "http://localhost:5000/disasters";

//### getDisasters
export const getDisasters = async () => {
  return await axios.get(url);
};
