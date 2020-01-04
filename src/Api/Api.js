import axios from 'axios';

const config = {
    baseURL: 'http://10.10.16.106:8084/'
};

export default axios.create(config);
