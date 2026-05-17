import {
useState
}
from "react";

import API
from "../services/api";

function Match(){

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
"/match",
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
response.data
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

Candidate Matching

</h1>

<br/>

<input
placeholder=
"Required Skills"

value=
{requiredSkills}

onChange=
{
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

onChange=
{
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

onChange=
{
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

Match Candidates

</button>

<hr/>

{

results.map(
(candidate)=>(

<div

className="card"

key=
{candidate._id}

>

<h3>

{candidate.name}

</h3>

<p>

Score:
{candidate.matchScore}

</p>

<p>

Rank:
{candidate.rank}

</p>

<p>

Matched Skills:
{candidate.matchedSkills.join(", ")}

</p>

</div>

)

)

}

</div>

);

}

export default Match;