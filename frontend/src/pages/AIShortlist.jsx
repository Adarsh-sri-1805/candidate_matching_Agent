import {
useState
}
from "react";

import API
from "../services/api";

function AIShortlist(){

const[
requiredSkills,
setRequiredSkills
]=
useState("");

const[
preferredSkills,
setPreferredSkills
]=
useState("");

const[
minExperience,
setMinExperience
]=
useState("");

const[
results,
setResults
]=
useState([]);

const handleSubmit=
async()=>{

try{

const response=
await API.post(
"/ai/shortlist",
{

requiredSkills:
requiredSkills
.split(",")
.map(
skill=>
skill.trim()
),

preferredSkills:
preferredSkills
.split(",")
.map(
skill=>
skill.trim()
),

minExperience:
Number(
minExperience
)

}

);

setResults(
response.data.topCandidates
);

}

catch(error){

console.log(
error
);

}

};

return(

<div className="container">

<h1>

AI Candidate Shortlist

</h1>

<br/>

<input
placeholder=
"Required Skills"

value=
{requiredSkills}

onChange={
(e)=>
setRequiredSkills(
e.target.value
)
}
/>

<br/>

<input
placeholder=
"Preferred Skills"

value=
{preferredSkills}

onChange={
(e)=>
setPreferredSkills(
e.target.value
)
}
/>

<br/>

<input
type="number"

placeholder=
"Minimum Experience"

value=
{minExperience}

onChange={
(e)=>
setMinExperience(
e.target.value
)
}
/>

<br/>

<button
onClick=
{handleSubmit}
>

Generate AI Shortlist

</button>

<hr/>

{

results.map(
(candidate,index)=>(

<div
className="card"
key={index}
>

<h2>

{candidate.name}

</h2>

<p>

Reason:
{candidate.reason}

</p>

<p>

AI Score:
{candidate.score}

</p>

</div>

)

)

}

</div>

);

}

export default AIShortlist;