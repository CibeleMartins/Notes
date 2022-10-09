import axios from "axios";

const database = axios.create({
    baseURL: "https://notes-api22.herokuapp.com"
})