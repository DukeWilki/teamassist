import axios from "axios";

export const registerUser = (userData) => {
  return axios.post("/api/register", {
    email: userData.email,
    password: userData.password,
  });
};

export const loginUser = (userData) => {
  return axios.post("/api/login", {
    email: userData.email,
    password: userData.password,
  });
};

export const getUser = () => {
  return axios.get("/api/profile");
};

export const getUsers = () => {
  return axios.get("/api/displayusers");
};
