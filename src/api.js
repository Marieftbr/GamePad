import axios from "axios";

const client = axios.create({
  baseURL: "https://gamepad-backend-marie.herokuapp.com/",
});

export default client;
