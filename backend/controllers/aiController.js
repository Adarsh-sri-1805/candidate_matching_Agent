const Candidate =
require("../models/candidate");

const aiShortlist =
require("../services/openrouterService");

const getAIShortlist =
async(req,res)=>{

try{

const candidates=
await Candidate.find();

const response=
await aiShortlist(
req.body,
candidates
);

res.status(200)
.json(response);

}

catch(error){

res.status(500).json({

message:error.message

});

}

};

module.exports={
getAIShortlist
};