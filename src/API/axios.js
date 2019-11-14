import axios from "axios"

const server = axios.create({
    baseURL: "http://localhost:5000/api/v1",
  });

  export default server;