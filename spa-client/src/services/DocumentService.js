import http from "../http-config.js";

class DocumentService {

    getAll() {
        return http.get("/document/all");
    }

    update(id, data) {
        return http.put(`/document/${id}`, data)
    }

    delete(id) {
        return http.delete(`/document/${id}`)
    }

    get(id) {
        return http.get(`/document/${id}`)
    }

    add(data) {
        return http.post("/document/add", data);
    }
}

export default new DocumentService();