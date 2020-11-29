import http from "../http-config.js";
// const qs = require('qs');

class UserDataService {

    login(email, password) {
        return http.get("/users", { params: { email: email, password: password } })
    }

    register(data) {
        return http.post("/users", data)
    }
}

export default new UserDataService();