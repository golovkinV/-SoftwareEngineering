import http from "../http-config.js";

class EventService {

    getAll() {
        return http.get("/event/all");
    }

    add(data) {
        return http.post("/event/add", data);
    }
}

export default new EventService();