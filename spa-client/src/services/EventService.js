import http from "../http-config.js";

class EventService {

    getAll() {
        return http.get("/event/all");
    }

    update(id, event) {
        return http.put(`/event/${id}`, event)
    }

    get(id) {
        return http.get(`/event/${id}`)
    }

    add(data) {
        return http.post("/event/add", data);
    }

    addUser(id, data) {
        return http.put(`/event/addUser/${id}`, data)
    }

    removeUser(id, data) {
        return http.put(`/event/removeUser/${id}`, data)
    }
}

export default new EventService();