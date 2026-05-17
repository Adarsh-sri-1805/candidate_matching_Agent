function CandidateCard({

name,
email,
skills,
experience

}){

return(

<div
style={{

border:"1px solid lightgray",
padding:"15px",
marginBottom:"15px",
borderRadius:"10px"

}}
>

<h3>{name}</h3>

<p>
{email}
</p>

<p>

Skills:
{skills.join(", ")}

</p>

<p>

Experience:
{experience} years

</p>

</div>

);

}

export default CandidateCard;