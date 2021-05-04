import axios from "axios";

export default axios.create({
    baseURL: "http://127.0.0.1:8000/api/",
    withCredentials: false,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Accepts-version": "1.0"
    }
});
