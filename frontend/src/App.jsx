import {
BrowserRouter,
Routes,
Route
}
from "react-router-dom";

import Navbar
from "./components/Navbar";

import Home
from "./pages/Home";

import Candidates
from "./pages/Candidates";

import Match
from "./pages/Match";

import AIShortlist
from "./pages/AIShortlist";

function App(){

return(

<BrowserRouter>

<Navbar/>

<Routes>

<Route
path="/"
element={<Home/>}
/>

<Route
path="/candidates"
element={<Candidates/>}
/>

<Route
path="/match"
element={<Match/>}
/>

<Route
path="/shortlist"
element={<AIShortlist/>}
/>

</Routes>

</BrowserRouter>

);

}

export default App;