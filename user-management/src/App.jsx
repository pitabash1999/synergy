import React, { useEffect } from "react";
import { getContext } from "./store/Provider";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Create from "./components/Create";
import Update from "./components/Update";
import NotFound from "./components/NotFound";
import Navbar from "./components/Navbar";

const App = () => {
  const { state } = getContext();

  //Fetch users on component mount
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        await state.getAllUsers();
      } catch (error) {
        console.error("Error in fetching users", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
