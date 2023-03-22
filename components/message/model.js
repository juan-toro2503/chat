const mongoose = require('mongoose')


const Schema=mongoose.Schema;

const mySchema= new Schema({
    user: {
        type:Schema.ObjectId,
        ref:'user'
    },
    message: String,
    date:Date,
});

const model= mongoose.model('messages',mySchema);
module.exports=model;