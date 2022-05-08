import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

//how the document will look like
const inventorySchema = mongoose.Schema({
    Organization:{type:String,/*required: true*/},
    stretcher: {type:Number,/*required: true*/ },
    lifejacket: {type:Number,/*required: true*/},
    firstaid: {type:Number,/*required: true*/},
    bucket: {type:Number,/*required: true*/},
    gloves: {type:Number,/*required: true*/},
    torchlight: {type:Number,/*required: true*/},
    safetyhelmet: {type:Number,/*required: true*/},
    readymadefood: {type:Number, /*required: true*/},
    others: {type:String,/*required: true*/},
});

autoIncrement.initialize(mongoose.connection);
inventorySchema.plugin(autoIncrement.plugin, 'inventory');
// we need to turn it into a model
const postInventory = mongoose.model('inventory', inventorySchema, 'inventory');

export default postInventory;



