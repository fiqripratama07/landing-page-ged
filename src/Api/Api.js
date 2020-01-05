import axios from 'axios';

const config = {
    baseURL: 'http://10.10.16.159:8083/'
};

export default axios.create(config);
