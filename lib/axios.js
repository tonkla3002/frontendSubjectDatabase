import axios from "axios";

const myapi = axios.create({
  baseURL:"http://localhost:8000",
});

export { myapi  }