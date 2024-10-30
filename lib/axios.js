import axios from "axios";

const myapi = axios.create({
  baseURL:process.env.URL_BACKEND,
});

export { myapi  }