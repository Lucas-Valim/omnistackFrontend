import axios from 'axios';

const api = axios.create({
    baseURL: 'https://omnistack-backendlucas.herokuapp.com',
});

export default api;