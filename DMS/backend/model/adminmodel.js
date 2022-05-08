//importing the model
import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

//how will the DB looks like
const LoginSchema = mongoose.Schema({
    First_Name: String,
    Last_Name: String,
    Email: String,
    Password : String,
    Adminusername : String,
    reenterPassword : String,
    
});

autoIncrement.initialize(mongoose.connection);
LoginSchema.plugin(autoIncrement.plugin, 'Login');
// we need to turn this into a model
const postLogin = mongoose.model('Login', LoginSchema);

export default postLogin;

