import mongoose, { Schema } from "mongoose";

const Scheema = mongoose.Schema;

const MovieSchema = new Schema({
    name: String,
    year: String,
    director: String,
    genere: String,
    runtime: Number
},{
    timestamps:true,
    colletion:'movies'
});

export default  mongoose.model('Movies', MovieSchema)