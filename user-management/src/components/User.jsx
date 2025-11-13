import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { getContext } from "../store/Provider";

const User = ({ user }) => {
  const navigate = useNavigate();
  const { state } = getContext();
  return (
    <div className="bg-slate-900 text-white md:flex  md:flex-row md:justify-evenly p-6 rounded-lg shadow-lg w-full mx-auto mb-6">
      {/* left */}
      <div className="mb-6 md:mb-0 w-full md:w-1/2 flex-col flex justify-between">
        <h2 className="text-2xl font-bold mb-2">{user.name}</h2>
        <p className="text-gray-400 mb-1">Username: {user.username}</p>
        <p className="text-gray-400 mb-1">Email: {user.email}</p>
        <p className="text-gray-400 mb-1">Phone: {user.phone}</p>
        <p className="text-gray-400 mb-4">
          Website:{" "}
          <a
            href={`https://${user.website}`}
            className="text-blue-400 underline"
          >
            {user.website}
          </a>
        </p>
      </div>
      {/* right */}
      <div className="mb-6 md:mb-0 w-full md:w-1/2">
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Address</h3>
          <p>
            {user.address.suite}, {user.address.street}
          </p>
          <p>
            {user.address.city}, {user.address.zipcode}
          </p>
          <p>
            Geo: {user.address.geo.lat}, {user.address.geo.lng}
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Company</h3>
          <p className="italic">"{user.company.catchPhrase}"</p>
          <p>{user.company.name}</p>
          <p className="text-sm text-gray-500">{user.company.bs}</p>
        </div>
      </div>
      <div className="flex justify-center gap-4 text-2xl">
        <FaEdit
          className="cursor-pointer text-blue-500"
          onClick={() => navigate(`/update/${user.id}`)}
        />{" "}
        <MdDeleteForever
          className="cursor-pointer text-red-500"
          onClick={() => state.deleteUserById(user.id)}
        />
      </div>
    </div>
  );
};

export default User;
