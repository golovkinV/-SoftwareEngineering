import http from "../http-config.js";

class UserDataService {

    login(email, password) {
        return http.get("/users", { params: { email: email, password: password } })
    }
}

export default new UserDataService();