import axios from "axios"

const server = axios.create({
  baseURL: "https://burger-top-server.herokuapp.com/api/v1",
});

  export default server;