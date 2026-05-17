import {
useEffect,
useState
}
from "react";

import API
from "../services/api";

import CandidateCard
from "../components/CandidateCard";

function Candidates(){

const[
candidates,
setCandidates
]=
useState([]);

const[
form,
setForm
]=
useState({

name:"",
email:"",
skills:"",
experience:"",
bio:""

});

useEffect(()=>{

fetchCandidates();

},[]);

const fetchCandidates=
async()=>{

try{

const response=
await API.get(
"/candidates"
);

setCandidates(
response.data
);

}

catch(error){

console.log(error);

}

};

const handleChange=
(e)=>{

setForm({

...form,

[e.target.name]:
e.target.value

});

};

const handleSubmit=
async()=>{

try{

await API.post(
"/candidates",
{

...form,

skills:
form.skills
.split(",")
.map(
skill=>
skill.trim()
),

experience:
Number(
form.experience
)

}

);

fetchCandidates();

setForm({

name:"",
email:"",
skills:"",
experience:"",
bio:""

});

}

catch(error){

console.log(error);

}

};

return(

<div className="container">

<h1>
Candidates
</h1>

<br/>

<h2>
Add Candidate
</h2>

<br/>

<input
name="name"
placeholder="Name"
value={form.name}
onChange={handleChange}
/>

<br/>

<input
name="email"
placeholder="Email"
value={form.email}
onChange={handleChange}
/>

<br/>

<input
name="skills"
placeholder=
"React,Node.js"

value={form.skills}
onChange={handleChange}
/>

<br/>

<input
name="experience"
type="number"
placeholder=
"Experience"

value=
{form.experience}

onChange=
{handleChange}
/>

<br/>

<input
name="bio"
placeholder=
"Bio"

value=
{form.bio}

onChange=
{handleChange}
/>

<br/>

<button
onClick=
{handleSubmit}
>

Add Candidate

</button>

<hr/>

{

candidates.map(
(candidate)=>(

<CandidateCard

key=
{candidate._id}

name=
{candidate.name}

email=
{candidate.email}

skills=
{candidate.skills}

experience=
{candidate.experience}

/>

)

)

}

</div>

);

}

export default Candidates;