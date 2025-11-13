import { createContext, useContext, useReducer } from "react";
import {
  createUser,
  deleteUser,
  fetchUsers,
  getUserById,
  updateUser,
} from "../utils/api";

export const ContextProvider = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USERS":
      return { ...state, user: action.payload };
    case "ADD_USER":
      return { ...state, user: [...state.user, action.payload] };
    case "UPDATE_USER":
      const updatedUsers = state.user.map((user) =>
        user.id === action.payload.id ? action.payload : user
      );
      return { ...state, user: updatedUsers };
    case "DELETE_USER":
      const filteredUsers = state.user.filter(
        (user) => user.id !== action.payload
      );
      return { ...state, user: filteredUsers };
    default:
      return state;
  }
};
const Provider = ({ children }) => {
  //fetch all users
  const getAllUsers = async () => {
    try {
      state.loading = true;
      const response = await fetchUsers();
      dispatch({ type: "SET_USERS", payload: response });
    } catch (error) {
      console.error("Error fetching users:", error);
      throw error;
    } finally {
      state.loading = false;
    }
  };

  //create new user
  const createNewUser = async (userData) => {
    try {
      const response = await createUser(userData);
      dispatch({ type: "ADD_USER", payload: response });
    } catch (error) {
      throw error;
    }
  };

  //Get User by ID
  const getUser = async (id) => {
    try {
      const response = getUserById(id);
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  //Update User by ID
  const updateUserById = async (id, userData) => {
    try {
      const response = await updateUser(id, userData);
      dispatch({ type: "UPDATE_USER", payload: response });
      console.log(response);
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  //Delete User by ID
  const deleteUserById = async (id) => {
    try {
      const response = await deleteUser(id);
      dispatch({ type: "DELETE_USER", payload: id });
    } catch (error) {
      throw error;
    }
  };

  const initialState = {
    user: [],
    loading: false,
    getAllUsers,
    createNewUser,
    getUser,
    updateUserById,
    deleteUserById,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ContextProvider.Provider value={{ state, dispatch }}>
      {children}
    </ContextProvider.Provider>
  );
};

export default Provider;

export const getContext = () => useContext(ContextProvider);
