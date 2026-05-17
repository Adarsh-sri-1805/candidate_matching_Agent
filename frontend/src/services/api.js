import axios from "axios";

const API=axios.create({

baseURL:
"https://candidate-matching-agent.onrender.com/api"

});

export default API;