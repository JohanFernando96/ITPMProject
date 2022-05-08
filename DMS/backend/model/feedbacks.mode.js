import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

//how the document will look like
const feedbackSchema = mongoose.Schema({
      Name:{
            type:String, 
            //required:true
},
      Email:{
           type:String, 
           //required:true
},
     
      Phone:{
          type:String, 
          //required:true
},
      Feedback:{
          type:String, 
          //required:true
},
});

autoIncrement.initialize(mongoose.connection);
feedbackSchema.plugin(autoIncrement.plugin, 'feedback');
// we need to turn it into a model
const postFeedback = mongoose.model('feedback', feedbackSchema);

export default postFeedback;