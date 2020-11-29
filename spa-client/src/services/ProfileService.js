import http from "../http-config.js";

class ProfileService {
    get(id) {
        return http.get(`/profile/${id}`);
    }
}

export default new ProfileService ();