const express=require("express");

const router=
express.Router();

const {

getAIShortlist

}

=

require(
"../controllers/aiController"
);

router.post(
"/",
getAIShortlist
);

module.exports=
router;