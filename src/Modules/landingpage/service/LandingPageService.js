import Api from '../../../Api/Api';
import * as AlertConstant from "../../../Constant/AlertConstant";

export async function findTrackById(id) {
    return await Api.get(`transaction/${id}`)
        .then((resp) => {
            if (resp.status === 200) {
                AlertConstant.status_success_200("Success")
            } else if (resp.status === 400) {
                AlertConstant.status_bad_request_400("Bad Request");
            } else if (resp.status === 500) {
                AlertConstant.status_internal_server_error_500("Internal Server Error");
            } else if (resp.status === 404) {
                AlertConstant.status_not_found_404("Server Not Found");
            }

        })
}
