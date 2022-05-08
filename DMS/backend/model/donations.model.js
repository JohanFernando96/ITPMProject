import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

//how the document will look like
const donationSchema = mongoose.Schema({
      Donator:{
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
      Items:{
           type:String, 
           //required:true
},
      Quantity:{
           type:Number, 
           //required:true
},
      Phone:{
          type:String, 
          //required:true
},
});

autoIncrement.initialize(mongoose.connection);
donationSchema.plugin(autoIncrement.plugin, 'donation');
// we need to turn it into a model
const postDonation = mongoose.model('donation', donationSchema);

export default postDonation;