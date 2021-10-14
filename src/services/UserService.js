import http from "./http-common";

class UserService {
    findAll() {
        return http.get("/users")
    }
}

export default new UserService()