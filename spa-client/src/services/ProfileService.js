import http from "../http-config.js";

class ProfileService {
    get(id) {
        return http.get(`/profile/${id}`);
    }

    updatePassword(data) {
        return http.post("/profile/update_password", data)
    }

    updateProfile(data) {
       return http.put(`/profile/update_profile/${data.id}`, data);
    }

    updatePin(data) {
       return http.post("/profile/update_pin", data);
    }
}

export default new ProfileService ();