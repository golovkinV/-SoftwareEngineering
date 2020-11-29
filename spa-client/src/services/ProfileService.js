import http from "../http-config.js";

class ProfileService {
    get(id) {
        return http.get(`/profile/${id}`);
    }

    updatePassword(data) {
        return http.post("/profile/update_password", data)
    }
}

export default new ProfileService ();