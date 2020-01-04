import Api from '../../../Api/Api';

export async function findTrackById(id) {
    return await Api.get(`transaction/${id}`)
        .then((resp) => resp.data)
}
