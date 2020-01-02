import Api from '../../../Api/Api';
import axios from 'axios';

export async function save(params) {
    return await Api.post(`users`, params)
        .then((resp) => resp.data)
}
