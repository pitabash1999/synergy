import { useNavigate } from "react-router-dom";
import { IoPersonAddSharp } from "react-icons/io5";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-slate-950  p-4 flex justify-between items-center">
      <div className="w-1/2">
        <h2
          className="text-xl font-bold text-blue-800 cursor-pointer"
          onClick={() => navigate("/")}
        >
          User Management
        </h2>
      </div>
      <div className="w-1/2">
        <ul className="flex justify-end gap-6 text-white font-semibold">
          <li
            className="cursor-pointer flex gap-2 items-center justify-center"
            onClick={() => navigate("/create")}
          >
            <IoPersonAddSharp />
            Create
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
