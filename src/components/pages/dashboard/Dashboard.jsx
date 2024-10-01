import { MdHome, MdOutlineWork, MdSwitchAccount } from "react-icons/md";
import { FaBoxArchive, FaMoneyCheck } from "react-icons/fa6";
import { FaHandsHelping } from "react-icons/fa";
import { GrTransaction } from "react-icons/gr";
import { GoCrossReference } from "react-icons/go";
import { RiLogoutBoxFill, RiGift2Fill } from "react-icons/ri";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import people from "../../../assets/icon/people.png";
import tap from "../../../assets/icon/tap.jpg";
import Navbar from "../../shared/Navbar";

const Dashboard = () => {
  const [balanceTapped, setBalanceTapped] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleTap = () => {
    setBalanceTapped((prevState) => !prevState);
  };

  const handleLogout = () => {
    navigate(location?.state ? location.state : "/logIn");
  };

  return (
    <div>
      <Navbar />
      <div className="flex">
        <div className="w-72 min-h-screen bg-[#0E9C7E] fixed max-md:hidden">
          <div className="w-full flex items-center justify-center gap-5 px-3 py-6 border-b-[1px] border-solid border-white">
            <img
              src={people}
              alt="person"
              className="object-cover object-center w-12 h-12 rounded-full border-2 border-white shadow-md"
            />
            <div className="flex justify-center items-center flex-col">
              <h2 className="text-white text-base font-semibold mb-1">
                jhon100
              </h2>
              <div
                className="bg-white w-36 p-[2px] text-sm rounded-full cursor-pointer flex items-center gap-2 shadow-md hover:shadow-lg transition"
                onClick={handleTap}
              >
                <img src={tap} alt="tap" className="h-7 w-8 rounded-full" />
                {balanceTapped ? (
                  <span className="text-[#0E9C7E] text-sm font-semibold">
                    100
                  </span>
                ) : (
                  <span className="text-[#0E9C7E] text-sm font-semibold">
                    Tap for Balance
                  </span>
                )}
              </div>
            </div>
          </div>
          <ul className="space-y-[5px] my-1 px-6">
            <li>
              <NavLink
                to={"/dashboard/user/home"}
                style={({ isActive }) => ({
                  background: isActive ? "#1b7964" : "",
                })}
                className="flex items-center text-white gap-2 text-lg py-2 px-6 rounded-md hover:bg-[#1b7964]"
              >
                <MdHome className="text-2xl" />
                <h1 className="font-semibold">Home</h1>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/dashboard/user/deposit"}
                style={({ isActive }) => ({
                  background: isActive ? "#1b7964" : "",
                })}
                className="flex items-center text-white gap-2 text-lg py-2 px-6 rounded-md hover:bg-[#1b7964]"
              >
                <FaBoxArchive />
                <h1 className="font-semibold">Deposit</h1>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/dashboard/user/withdraw"}
                style={({ isActive }) => ({
                  background: isActive ? "#1b7964" : "",
                })}
                className="flex items-center text-white gap-2 text-lg py-2 px-6 rounded-md hover:bg-[#1b7964]"
              >
                <FaMoneyCheck />
                <h1 className="font-semibold">Withdraw</h1>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/dashboard/user/task"}
                style={({ isActive }) => ({
                  background: isActive ? "#1b7964" : "",
                })}
                className="flex items-center text-white gap-2 text-lg py-2 px-6 rounded-md hover:bg-[#1b7964]"
              >
                <MdOutlineWork />
                <h1 className="font-semibold">Daily Work</h1>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/dashboard/user/package"}
                style={({ isActive }) => ({
                  background: isActive ? "#1b7964" : "",
                })}
                className="flex items-center text-white gap-2 text-lg py-2 px-6 rounded-md hover:bg-[#1b7964]"
              >
                <RiGift2Fill />
                <h1 className="font-semibold">Package</h1>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/dashboard/user/transaction"}
                style={({ isActive }) => ({
                  background: isActive ? "#1b7964" : "",
                })}
                className="flex items-center text-white gap-2 text-lg py-2 px-6 rounded-md hover:bg-[#1b7964]"
              >
                <GrTransaction />
                <h1 className="font-semibold">Transaction</h1>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/dashboard/user/referral"}
                style={({ isActive }) => ({
                  background: isActive ? "#1b7964" : "",
                })}
                className="flex items-center text-white gap-2 text-lg py-2 px-6 rounded-md hover:bg-[#1b7964]"
              >
                <GoCrossReference />
                <h1 className="font-semibold">Referral</h1>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/dashboard/user/account"}
                style={({ isActive }) => ({
                  background: isActive ? "#1b7964" : "",
                })}
                className="flex items-center text-white gap-2 text-lg py-2 px-6 rounded-md hover:bg-[#1b7964]"
              >
                <MdSwitchAccount />
                <h1 className="font-semibold">Profile</h1>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/dashboard/user/helpline"}
                style={({ isActive }) => ({
                  background: isActive ? "#1b7964" : "",
                })}
                className="flex items-center text-white gap-2 text-lg py-2 px-6 rounded-md hover:bg-[#1b7964]"
              >
                <FaHandsHelping />
                <h1 className="font-semibold">Helpline</h1>
              </NavLink>
            </li>
            <li>
              <button
                onClick={() => handleLogout()}
                className="text-white w-full flex items-center font-semibold gap-2 text-lg py-2 px-6 rounded-md hover:bg-[#1b7964] transition duration-300"
              >
                <RiLogoutBoxFill /> Logout
              </button>
            </li>
          </ul>
        </div>
        <div className="flex-1 md:ml-72 w-11/12 mx-auto">
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
