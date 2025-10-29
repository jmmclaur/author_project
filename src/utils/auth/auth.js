//const baseUrl = "http://localhost:3001/author_project";
const baseUrl = "http://localhost:3001";
import { checkResponse } from "../api";

//creating auth for user roles
/*
const auth = {
  isUser: false,
  isAdmin: false,
  token: null,

  register(name, email, password) {
    return fetch(`${baseUrl}/signup`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    }).then(checkResponse);
  },

  login(data) {
    console.log("Setting login data:", data);
    this.isUser = true;
    this.isAdmin = data.user.role === "admin";
    console.log("Is admin value:", this.isAdmin, "Role:", data.role);
    this.token = data.token;
    localStorage.setItem("jwt", data.token);
    localStorage.setItem("userRole", data.user.role); //to store the role in localstorage
    console.log("LocalStorage after setting:", {
      role: localStorage.getItem("userRole"),
      token: localStorage.getItem("jwt"),
    });
  },
  logout() {
    this.isUser = false;
    this.isAdmin = false;
    this.token = null;
    localStorage.removeItem("jwt");
    localStorage.removeItem("userRole");
    localStorage.removeItem("username");
  },
  

  checkToken() {
    const token = localStorage.getItem("jwt");
    const role = localStorage.getItem("userRole");
    if (token) {
      this.isUser = true;
      this.isAdmin = role === "admin";
      this.token = token;
      return true;
    }
    return false;
  },
}; */

export const register = async (name, email, password) => {
  const response = await fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  });
  return checkResponse(response);
};

export const login = async (email, password) => {
  const res = await fetch(`${baseUrl}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  const data = await checkResponse(res);
  if (data.token) {
    console.log("Login data received:", {
      //role: data.user.role,
      token: data.token,
    });
    /*
    console.log("Auth state before setting:", {
      isUser: auth.isUser,
      isAdmin: auth.isAdmin,
    }); 
    //auth.login(data);
    console.log(auth.isAdmin);
    console.log("Auth state after login:", {
      isUser: auth.isUser,
      isAdmin: auth.isAdmin,
      storedRole: localStorage.getItem("userRole"),
    }); */
  }
  return data;
};

//export default auth;
