import axios from "axios"

const server = axios.create({
    baseURL: process.env.API_URL,
  });

  export default server;