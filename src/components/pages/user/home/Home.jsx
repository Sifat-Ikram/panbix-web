import Banner from "./Banner";
import { Link } from "react-router-dom";
import {
  FaTasks,
  FaPiggyBank,
  FaBoxOpen,
  FaUserAlt,
  FaMoneyCheckAlt,
  FaPhoneAlt,
  FaYoutube,
} from "react-icons/fa";
import { GiCash } from "react-icons/gi";
import { BsFillSendCheckFill } from "react-icons/bs";

const Home = () => {
  return (
    <div className="flex flex-col bg-gray-100 min-h-screen mb-8">
      <div>
        <Banner />
      </div>
      <div className="lg:px-6 px-3 py-6 w-full">
        <div className="bg-white border border-gray-200 rounded-lg shadow-md lg:px-6 px-3 py-6">
          <h2 className="text-2xl font-bold mb-4">All Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-6 mt-8">
            <Link to="/dashboard/user/task">
              <div className="flex items-center flex-col py-4 bg-gray-50 rounded-lg border shadow-md hover:shadow-lg transition cursor-pointer transform hover:-translate-y-1 group">
                <FaTasks className="text-4xl mb-3 text-[#0E9C7E]" />
                <h2 className="text-black font-medium text-center group-hover:text-[#0E9C7E]">
                  My Work
                </h2>
              </div>
            </Link>
            <Link to="/dashboard/user/deposit">
              <div className="flex items-center flex-col py-4 bg-gray-50 rounded-lg border shadow-md hover:shadow-lg transition cursor-pointer transform hover:-translate-y-1 group">
                <FaPiggyBank className="text-4xl mb-3 text-[#0E9C7E]" />
                <h2 className="text-black font-medium text-center group-hover:text-[#0E9C7E]">
                  Deposit
                </h2>
              </div>
            </Link>
            <Link to="/dashboard/user/withdraw">
              <div className="flex items-center flex-col py-4 bg-gray-50 rounded-lg border shadow-md hover:shadow-lg transition cursor-pointer transform hover:-translate-y-1 group">
                <GiCash className="text-4xl mb-3 text-[#0E9C7E]" />
                <h2 className="text-black font-medium text-center group-hover:text-[#0E9C7E]">
                  Withdraw
                </h2>
              </div>
            </Link>
            <Link to="/dashboard/user/package">
              <div className="flex items-center flex-col py-4 bg-gray-50 rounded-lg border shadow-md hover:shadow-lg transition cursor-pointer transform hover:-translate-y-1 group">
                <FaBoxOpen className="text-4xl mb-3 text-[#0E9C7E]" />
                <h2 className="text-black font-medium text-center group-hover:text-[#0E9C7E]">
                  Packages
                </h2>
              </div>
            </Link>
            <Link to="/dashboard/user/account">
              <div className="flex items-center flex-col py-4 bg-gray-50 rounded-lg border shadow-md hover:shadow-lg transition cursor-pointer transform hover:-translate-y-1 group">
                <FaUserAlt className="text-4xl mb-3 text-[#0E9C7E]" />
                <h2 className="text-black font-medium text-center group-hover:text-[#0E9C7E]">
                  Profile
                </h2>
              </div>
            </Link>
            <Link to="/dashboard/user/referral">
              <div className="flex items-center flex-col py-4 bg-gray-50 rounded-lg border shadow-md hover:shadow-lg transition cursor-pointer transform hover:-translate-y-1 group">
                <BsFillSendCheckFill className="text-4xl mb-3 text-[#0E9C7E]" />
                <h2 className="text-black font-medium text-center group-hover:text-[#0E9C7E]">
                  Refer
                </h2>
              </div>
            </Link>
            <Link to="/dashboard/user/transaction">
              <div className="flex items-center flex-col py-4 bg-gray-50 rounded-lg border shadow-md hover:shadow-lg transition cursor-pointer transform hover:-translate-y-1 group">
                <FaMoneyCheckAlt className="text-4xl mb-3 text-[#0E9C7E]" />
                <h2 className="text-black font-medium text-center group-hover:text-[#0E9C7E]">
                  Transaction
                </h2>
              </div>
            </Link>
            <Link to="/dashboard/user/helpline">
              <div className="flex items-center flex-col py-4 bg-gray-50 rounded-lg border shadow-md hover:shadow-lg transition cursor-pointer transform hover:-translate-y-1 group">
                <FaPhoneAlt className="text-4xl mb-3 text-[#0E9C7E]" />
                <h2 className="text-black font-medium text-center group-hover:text-[#0E9C7E]">
                  Helpline
                </h2>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="p-6">
        <Link className="flex max-md:flex-col max-md:space-y-5 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-transform overflow-hidden mt-6">
          <div className="w-full md:w-2/5 h-52">
            <FaYoutube className="text-7xl text-red-600 h-full w-full object-cover flex justify-center items-center" />
          </div>
          <div className="relative flex-1 flex flex-col justify-center items-center text-center p-6">
            <h2 className="text-2xl font-bold mb-2">Watch Our Tutorial</h2>
            <p className="text-sm mb-4">
              Learn how to navigate your dashboard and make the most of our
              services.
            </p>
            <button className="px-6 py-2 bg-[#0E9C7E] text-white rounded-full shadow-md hover:bg-[#0c8269] transition">
              Watch Now
            </button>
            <div className="absolute top-0 right-0 w-20 h-20 bg-[#0E9C7E] bg-opacity-40 rounded-full mix-blend-multiply blur-xl"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-[#0c8269] bg-opacity-40 rounded-full mix-blend-multiply blur-lg"></div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
