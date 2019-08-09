import axios from 'axios';

const api =  axios.create({
    baseURL:"http://localhost:3800"
})

export default api;