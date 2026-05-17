import {
Link
}
from "react-router-dom";

function Navbar(){

return(

<div
style={{

background:"#111827",

padding:"20px",

display:"flex",

gap:"25px"

}}
>

<Link
style={{
color:"white",
textDecoration:"none"
}}
to="/"
>
Home
</Link>

<Link
style={{
color:"white",
textDecoration:"none"
}}
to="/candidates"
>
Candidates
</Link>

<Link
style={{
color:"white",
textDecoration:"none"
}}
to="/match"
>
Match
</Link>

<Link
style={{
color:"white",
textDecoration:"none"
}}
to="/shortlist"
>
AI Shortlist
</Link>

</div>

);

}

export default Navbar;