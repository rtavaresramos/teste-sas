import axios from 'axios'

const api = axios.create({

     baseURL: 'https://api.myjson.com/bins/18q48w'

})

export default api

// Here we save the api which is serving the appliction