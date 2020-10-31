import axios from 'axios'

export default axios.create({
    baseURL: "http://192.168.15.14:5000/api"
})