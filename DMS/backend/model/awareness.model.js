//importing the model
import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

//how will the DB looks like
const awarenessSchema = mongoose.Schema({
	title:{
        type: String,
        required: true
    },
	content:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    date:{
        type: String,
        required: true
    }    
});

autoIncrement.initialize(mongoose.connection);
awarenessSchema.plugin(autoIncrement.plugin, 'awareness');
const postAwareness = mongoose.model('awareness', awarenessSchema);

export default postAwareness;
