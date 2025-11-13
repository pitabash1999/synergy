import axios from "axios";

// Create an Axios instance with base URL from environment variable
export const baseUrl = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

//Fetch Users
export const fetchUsers = async () => {
  try {
    const response = await baseUrl.get("/users");
    return response.data;
  } catch (error) {
    //console.error("Error fetching users:", error);
    throw error;
  }
};

//Create User
export const createUser = async (userData) => {
  try {
    const response = await baseUrl.post("/users", userData);
    return response.data;
  } catch (error) {
    //console.error("Error creating user:", error);
    throw error;
  }
};

//Get user by ID
export const getUserById = async (userId) => {
  try {
    const response = await baseUrl.get(`/users/${userId}`);
    return response.data;
  } catch (error) {
    //console.error("Error fetching user by ID:", error);
    throw error;
  }
};

//Update User by id
export const updateUser = async (userId, userData) => {
  try {
    const response = await baseUrl.patch(`/users/${userId}`, userData);
    return response.data;
  } catch (error) {
    //console.error("Error updating user:", error);
    throw error;
  }
};

//Delete User by id
export const deleteUser = async (userId) => {
  try {
    const response = await baseUrl.delete(`/users/${userId}`);
    return response.data;
  } catch (error) {
    //console.error("Error deleting user:", error);
    throw error;
  }
};
