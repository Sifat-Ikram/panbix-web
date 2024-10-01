import { useForm } from "react-hook-form";
import logo from "./assets/images/logoIcon/logo.png";
import { HiPhoneArrowDownLeft } from "react-icons/hi2";
import { HiLockClosed } from "react-icons/hi2";
import { useLocation, useNavigate } from "react-router-dom";

const App = () => {
  const { register, handleSubmit } = useForm();
  const location = useLocation();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    navigate(location?.state ? location.state : "/logIn");
  };

  return (
    <div className="min-h-screen bg-[#ebebeb] pb-10">
      <div className="flex justify-center min-h-screen items-center rounded-lg">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-8 mb-2 relative w-80 max-w-screen-lg sm:w-96 bg-white p-5 rounded-lg"
        >
          <div className="relative h-16">
            <img
              alt="avatar"
              src={logo}
              className="inline-block object-cover object-center !rounded-full absolute left-0 right-0 -top-[4rem] border h-24 mx-auto w-24 border-green-500 bg-white shadow-green-900/20 ring-4 ring-green-500/30"
            />
          </div>
          <div className="mb-4 flex flex-col gap-6">
            <div className="flex items-center border justify-center border-gray-300 rounded-lg overflow-hidden">
              <div className="h-12 w-12 flex items-center justify-center border-r border-gray-300">
                <HiPhoneArrowDownLeft className="h-6 text-xl cursor-pointer w-6 text-gray-900" />
              </div>
              <div className="relative w-full min-w-[200px]">
                <input
                  placeholder="Enter Username"
                  name="username"
                  {...register("username")}
                  type="text"
                  className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-3 rounded-md border-blue-gray-200 focus:border-green-500 !border-gray-300 focus:border-none border-none bg-white text-gray-900  placeholder:text-gray-500 focus:!border-t-gray-900 "
                />
              </div>
            </div>
            <div className="flex items-center border justify-center border-gray-300 rounded-lg overflow-hidden">
              <div className="h-12 w-12 flex items-center justify-center border-r border-gray-300">
                <HiLockClosed className="text-lg h-6 cursor-pointer w-6 text-gray-900" />
              </div>
              <div className="relative w-full min-w-[200px]">
                <input
                  placeholder="Enter Password"
                  name="password"
                  {...register("password")}
                  type="password"
                  className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-3 rounded-md border-blue-gray-200 focus:border-green-500 !border-gray-300 focus:border-none border-none bg-white text-gray-900  placeholder:text-gray-500 focus:!border-t-gray-900 "
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 text-white shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none w-full hover:bg-[#0c0ce8] mt-6 border bg-[#0c0ce8] shadow-none flex gap-3 justify-center items-center rounded-lg"
          >
            Login
          </button>
          <p className="block antialiased font-sans text-gray-700 mt-4 text-center font-normal text-sm">
            Not registered yet?
            <br />
            <a
              className="text-[#0c0ce8] font-kanit font-light transition-colors hover:text-red-700 text-lg"
              href="/register"
            >
              Create new account
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default App;
