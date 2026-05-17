const mongoose = require("mongoose");

const CandidateSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true,
        unique:true
    },

    skills:[String],

    experience:{
        type:Number,
        required:true
    },

    bio:String,

    projects:[String]

},
{
    timestamps:true
});

module.exports=
mongoose.model(
    "Candidate",
    CandidateSchema
);