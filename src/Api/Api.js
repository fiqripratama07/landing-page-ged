import axios from 'axios';

const config = {
    baseURL: 'http://10.10.16.180:8084/'
};

export default axios.create(config);
