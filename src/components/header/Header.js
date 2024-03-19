import React, { useContext } from "react";
import { IoLogOutOutline } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import NavItems from "./NavItems";
import { Link, useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import { DATA_CONTEXT } from "../../provider/DataProvider";

const Header = () => {
  const { userDataMange } = useContext(DATA_CONTEXT) || {};
  const { user, userRefetch } = userDataMange;
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("wegro");
    userRefetch();
    navigate("/login");
  };

  return (
    <div className="bg-white shadow">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <NavItems />
            </ul>
          </div>
          <Link to="/" className=" text-2xl font-extrabold">
            <span className="text-[#00AE42]">WE</span>
            <span className="text-[#FF8300]">GRO</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white font-bold text-lg">
            <NavItems />
          </ul>
        </div>
        <div className="navbar-end gap-x-2">
          <SearchBar />

          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn m-1 text-xl text-secondary bg-secondary/10 hover:bg-secondary/20 p-2 px-3">
              <IoPerson />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <h1 className="text-lg font-semibold">{user.name}</h1>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="px-2 py-1 duration-300 hover:bg-gray-200 w-fit hover:rounded-lg font-bold text-red-500 text-base flex items-center justify-center w-full"
                >
                  <span className="text-xl">
                    <IoLogOutOutline />
                  </span>{" "}
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
