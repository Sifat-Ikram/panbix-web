import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import tap from "../../assets/icon/tap.jpg";

const Navbar = () => {
  const [balanceTapped, setBalanceTapped] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate(location?.state ? location.state : "/logIn");
  };

  const handleTap = () => {
    setBalanceTapped((prevState) => !prevState);
  };

  const navList = (
    <>
      <li>
        <NavLink
          style={({ isActive }) => ({
            background: isActive ? "#0E9C7E" : "",
          })}
          to={"/dashboard/user/home"}
          className="flex items-center text-white gap-2 text-lg py-2 px-6 rounded-md hover:bg-[#0E9C7E] transition duration-300"
        >
          <h1 className="font-semibold">Home</h1>
        </NavLink>
      </li>
      <li>
        <NavLink
          style={({ isActive }) => ({
            background: isActive ? "#0E9C7E" : "",
          })}
          to={"/dashboard/user/deposit"}
          className="flex items-center text-white gap-2 text-lg py-2 px-6 rounded-md hover:bg-[#0E9C7E] transition duration-300"
        >
          <h1 className="font-semibold">Deposit</h1>
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/dashboard/user/withdraw"}
          style={({ isActive }) => ({
            background: isActive ? "#0E9C7E" : "",
          })}
          className="flex items-center text-white gap-2 text-lg py-2 px-6 rounded-md hover:bg-[#0E9C7E] transition duration-300"
        >
          <h1 className="font-semibold">Withdraw</h1>
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/dashboard/user/task"}
          style={({ isActive }) => ({
            background: isActive ? "#0E9C7E" : "",
          })}
          className="flex items-center text-white gap-2 text-lg py-2 px-6 rounded-md hover:bg-[#0E9C7E] transition duration-300"
        >
          <h1 className="font-semibold">Daily Work</h1>
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/dashboard/user/package"}
          style={({ isActive }) => ({
            background: isActive ? "#0E9C7E" : "",
          })}
          className="flex items-center text-white gap-2 text-lg py-2 px-6 rounded-md hover:bg-[#0E9C7E] transition duration-300"
        >
          <h1 className="font-semibold">Package</h1>
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/dashboard/user/transaction"}
          style={({ isActive }) => ({
            background: isActive ? "#0E9C7E" : "",
          })}
          className="flex items-center text-white gap-2 text-lg py-2 px-6 rounded-md hover:bg-[#0E9C7E] transition duration-300"
        >
          <h1 className="font-semibold">Transaction</h1>
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/dashboard/user/referral"}
          style={({ isActive }) => ({
            background: isActive ? "#0E9C7E" : "",
          })}
          className="flex items-center text-white gap-2 text-lg py-2 px-6 rounded-md hover:bg-[#0E9C7E] transition duration-300"
        >
          <h1 className="font-semibold">Referral</h1>
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/dashboard/user/account"}
          style={({ isActive }) => ({
            background: isActive ? "#0E9C7E" : "",
          })}
          className="flex items-center text-white gap-2 text-lg py-2 px-6 rounded-md hover:bg-[#0E9C7E] transition duration-300"
        >
          <h1 className="font-semibold">Profile</h1>
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/dashboard/user/helpline"}
          style={({ isActive }) => ({
            background: isActive ? "#0E9C7E" : "",
          })}
          className="flex items-center text-white gap-2 text-lg py-2 px-6 rounded-md hover:bg-[#0E9C7E] transition duration-300"
        >
          <h1 className="font-semibold">Helpline</h1>
        </NavLink>
      </li>
      <li>
        <button
          onClick={() => handleLogout()}
          className="text-white font-semibold gap-2 text-lg py-2 px-6 rounded-md hover:bg-[#0E9C7E] transition duration-300"
        >
          Logout
        </button>
      </li>
    </>
  );

  return (
    <div className="md:hidden lg:hidden">
      <div className="navbar bg-[#0E9C7E]">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost text-white font-extrabold lg:hidden"
            >
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
              className="menu menu-sm dropdown-content bg-[#0E9C7E] rounded-box z-50 mt-3 w-52 p-2 shadow-lg transition duration-300 ease-in-out"
            >
              {navList}
            </ul>
          </div>
          <div className="p-3">
            <div>
              <h2 className="text-white text-base font-semibold mb-1">
                jhon100
              </h2>
            </div>
          </div>
        </div>
        <div className="navbar-end">
          <div
            className="bg-white w-36 p-[2px] text-sm rounded-full cursor-pointer flex items-center gap-2 shadow-md hover:shadow-lg transition duration-300"
            onClick={handleTap}
          >
            <img src={tap} alt="tap" className="h-7 w-8 rounded-full" />
            {balanceTapped ? (
              <span className="text-[#0E9C7E] text-sm font-semibold">100</span>
            ) : (
              <span className="text-[#0E9C7E] text-sm font-semibold">
                Tap for Balance
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
