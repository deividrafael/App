import axios from 'axios';

const api = axios.create({
    baseURL: 'https://app-qr-saude.herokuapp.com/'
});

export default api;