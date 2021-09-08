import axios from "axios";

const connectionApi = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export default connectionApi;
