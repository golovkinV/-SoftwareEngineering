import http from "../http-config.js";

class ImageService {
    upload(data) {
        return http.post("/image/upload", data);
    }
}

export default new ImageService();