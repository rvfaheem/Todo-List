import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    title:{
        type:String,
    },
    description:{
        type:String,
    },
})

const todo =mongoose.model('todo',todoSchema);

export default todo;