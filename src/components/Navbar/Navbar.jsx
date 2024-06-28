import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex h-20 w-full items-center justify-between bg-blue-400 px-10">
      <div className="">
        <h1 className="rounded-lg bg-[#002147] px-4 pb-1 text-3xl font-bold text-white">
          #ByteJobs
        </h1>
      </div>
      <div>
        <ul className="flex gap-8 pr-8 font-semibold text-white">
          <li className="text-xl">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-lg ${isActive ? "text-yellow-500" : "text-white"}`
              }
            >
              Home
            </NavLink>
          </li>
          <li className="text-xl">
            <NavLink
              to="/job"
              className={({ isActive }) =>
                `text-lg ${isActive ? "text-yellow-500" : "text-white"}`
              }
            >
              Jobs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `text-lg ${isActive ? "text-yellow-500" : "text-white"}`
              }
            >
              Login
            </NavLink>
          </li>
          <li className="text-xl">
            <NavLink
              to="sign-up"
              className={({ isActive }) =>
                `text-lg ${isActive ? "text-yellow-500" : "text-white"}`
              }
            >
              Sign Up
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Navbar;
