import axios from 'axios';

const config = {
    baseURL: 'http://localhost:8084/'
};

export default axios.create(config);
