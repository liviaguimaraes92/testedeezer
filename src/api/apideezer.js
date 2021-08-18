import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.deezer.com/chart/0',
  });

  export default api;