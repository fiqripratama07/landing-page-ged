import Api from '../../../Api/Api';

export async function findTrackById(id) {
    return await Api.get(`track/${id}`)
        .then((resp) => resp.data)
}
