import axios from "axios";

let http = axios.create({
    baseURL: "http://192.168.0.137:9080/payment-processor/api",
    headers: {
        'Content-Type': 'application-json'
    }
})

export default http