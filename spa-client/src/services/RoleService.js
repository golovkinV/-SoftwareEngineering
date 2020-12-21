import http from "../http-config.js";

class RoleService {
    getAll() {
        return http.get("role/all");
    }
}

export default new RoleService ();