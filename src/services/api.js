import axios from 'axios';

const api = axios.create({
    //baseURL: 'https://app-qr-saude.herokuapp.com'
    baseURL: 'http://localhost:8080/',
    timeout: 2000
    

});

export default api;