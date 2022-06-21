import axios from "axios";

const baseURL = 'https://api.themoviedb.org/3'
const API = axios.create({ baseURL });

export default API;
