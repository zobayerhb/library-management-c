import { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <div className="navbar shadow container mx-auto rounded">
      <div className="flex-1">
        <Link to={"/"} className="text-3xl font-extrabold text-blue-500">
          LMS
        </Link>
      </div>
      <p>{user?.email}</p>
      {user ? (
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="text-base font-medium">All Books</a>
              </li>
              <li>
                <a className="text-base font-medium">Add Books</a>
              </li>
              <li>
                <a className="text-base font-medium">Borrowed Books</a>
              </li>
              <button onClick={()=> logOut()} className="items-center text-white bg-red-900 rounded-2xl text-base font-medium cursor-pointer">
                Logout
              </button>
            </ul>
          </div>
        </div>
      ) : (
        <div className="flex gap-2 font-medium ">
          <Link to="/login" className="hover:text-blue-400 transition-all">
            Login
          </Link>
          <Link to="/register" className="hover:text-blue-400 transition-all">
            Register
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
