import http from "../http-config.js";

class UserService {

    getAll() {
        return http.get("/user/all");
    }

    login(email, password) {
        return http.get("/user", { params: { email: email, password: password } })
    }

    register(data) {
        return http.post("/user", data)
    }
}

export default new UserService();