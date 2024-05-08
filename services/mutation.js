import axios from "axios";

export const updateStatus = (data) => {
  return axios.patch("api/todos", data);
};

export const updateTodo = (data) => {
  return axios.patch("api/update-todo-v2", data);
};

export const updateProfile = (data) => {
  return axios.patch("api/profile", data);
};

export const addTodo = (data) => {
  return axios.post("/api/todos", data);
};

export const signUpUser = (data) => {
  return axios.post("/api/auth/signup", data);
};