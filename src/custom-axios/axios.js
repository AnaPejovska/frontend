import axios from "axios"

const instance =axios.create({
    baseURL: "https://vast-peak-03914.herokuapp.com/",
    headers: {
        'Access-Control-Allow-Origin' : '*'
    }
})

export default instance;