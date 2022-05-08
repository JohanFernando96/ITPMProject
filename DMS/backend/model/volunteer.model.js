//importing the model
import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

//how the MongoDB Document will be looks like
const volunteerSchema = mongoose.Schema({
    First_name:{
        type:String, 
        //required:true
},
    Last_name:{
       type:String, 
       //required:true
},
    Education:{
       type:String, 
      // required:true
},
    Area_of_expertise:{
       type:String, 
       //required:true
},
    Email:{
       type:String, 
       //required:true
},
    Address:{
       type:String, 
      // required:true
},    
    Phone:{
      type:String, 
      //required:true
},
});

autoIncrement.initialize(mongoose.connection);
volunteerSchema.plugin(autoIncrement.plugin, 'volunteer');
// we need to turn this into a model
const postVolunteer = mongoose.model('volunteer', volunteerSchema, 'volunteer');

export default postVolunteer;

