import http from "../http-config.js";

class RoleService {
    getAll() {
        return http.get("role/all");
    }

    get(id) {
        return http.get(`/role/${id}`)
    }
}

export default new RoleService ();