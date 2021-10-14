import http from "./http-common";

class UserService {
    findAll() {
        return http.get("/users")
    }

    create(user) {
        return http.post("/users", user)
    }

    delete(id){
        return http.delete(`/users/${id}`);
    }
}

export default new UserService()