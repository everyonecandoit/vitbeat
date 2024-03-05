const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const MusicSchema = new Schema({
    title:String,
    summary:String,
    content:String,
    cover:String,
    musicfile:String,
    author:{
        type:Schema.Types.ObjectId , ref:'User'
    }
},{
    timestamps:true,
});

const MusicModel = model('post',MusicSchema);
module.exports = MusicModel;
