import http from "./http-common";

class UserService {
    findAll() {
        return http.get("/users")
    }

    create(user) {
        return http.post("/users", user)
    }

    find(id) {
        return http.get(`/users/${id}`)
    }

    update(id, usr){
        return http.put(`/users/${id}`, usr)
    }

    delete(id) {
        return http.delete(`/users/${id}`);
    }
}

export default new UserService()