import axios from "axios";

export const fetchTodos = () => {
  return axios.get("api/todos");
};

export const fetchProfile = () => {
  return axios.get("api/profile");
};
