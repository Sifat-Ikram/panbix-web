import { FaMoneyBillAlt, FaPhone } from "react-icons/fa";
import bkash from "../../../../assets/images/dashboard/bkash.png";
import nogod from "../../../../assets/images/dashboard/nogod.png";
import rocket from "../../../../assets/images/dashboard/rocket.jpeg";
import { useForm } from "react-hook-form";

const Withdraw = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="p-8 bg-base-200">
      <div className="bg-white shadow-lg w-full text-center rounded-md p-6 my-5">
        <p className="text-lg font-bold">
          নোটিশঃ মিনিমাম উইথড্র ৫০০ টাকা। উইথড্র দেয়ার সাথে সাথে অটোম্যাটিকভাবে
          পেমেন্ট পেয়ে যাবেন
        </p>
      </div>
      <div className="bg-white shadow-lg w-full text-center rounded-md p-6 my-5">
        <p className="text-lg font-bold">
          Balance: <span className="text-[#1b7964]">100 BDT</span>
        </p>
      </div>
      <div className="bg-white shadow-lg w-full text-center rounded-md p-6 my-5 space-y-5">
        <h1 className="text-lg font-semibold">Select Payment Method</h1>
        <div className="flex justify-center items-center gap-5">
          <div className="border-2 border-solid border-[#0E9C7E] cursor-pointer hover:bg-[#0E9C7E] hover:text-white rounded-lg py-3 px-4 flex flex-col justify-center items-center">
            <img src={nogod} alt="Bkash" className="h-10 w-10" />
            <h1 className="text-sm font-bold mt-2">Nogod</h1>
          </div>
          <div className="border-2 border-solid border-[#0E9C7E] cursor-pointer hover:bg-[#0E9C7E] hover:text-white rounded-lg py-3 px-4 flex flex-col justify-center items-center">
            <img src={rocket} alt="Bkash" className="h-10 w-10" />
            <h1 className="text-sm font-bold mt-2">Rocket</h1>
          </div>
          <div className="border-2 border-solid border-[#0E9C7E] cursor-pointer hover:bg-[#0E9C7E] hover:text-white rounded-lg py-3 px-4 flex flex-col justify-center items-center">
            <img src={bkash} alt="Bkash" className="h-10 w-10" />
            <h1 className="text-sm font-bold mt-2">Bkash</h1>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-lg w-full text-center rounded-md p-6 my-5 space-y-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-4 items-center w-96 mx-auto justify-center  rounded-lg overflow-hidden">
            <h1>Number :</h1>
            <div className="flex justify-center items-center border border-gray-300">
              <div className="h-12 w-16 flex items-center justify-center border-r border-gray-300">
                <FaPhone className="h-6 text-4xl cursor-pointer text-gray-900" />
              </div>
              <div className="relative w-full min-w-[200px]">
                <input
                  placeholder="Enter Number"
                  name="number"
                  {...register("number")}
                  type="number"
                  className="w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-3 rounded-md border-blue-gray-200 focus:border-green-500 !border-gray-300 focus:border-none border-none bg-white text-gray-900  placeholder:text-gray-500 focus:!border-t-gray-900 "
                />
              </div>
            </div>
          </div>
          <div className="flex mt-4 gap-4 items-center w-96 mx-auto justify-center rounded-lg overflow-hidden">
            <h1>Amount :</h1>
            <div className="flex justify-center items-center border border-gray-300">
              <div className="h-12 w-16 flex items-center justify-center border-r border-gray-300">
                <FaMoneyBillAlt className="h-6 text-4xl cursor-pointer text-gray-900" />
              </div>
              <div className="relative w-full min-w-[200px]">
                <input
                  placeholder="Enter Amount"
                  name="amount"
                  {...register("amount")}
                  type="number"
                  className="w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-3 rounded-md border-blue-gray-200 focus:border-green-500 !border-gray-300 focus:border-none border-none bg-white text-gray-900  placeholder:text-gray-500 focus:!border-t-gray-900 "
                />
              </div>
            </div>
          </div>
        </form>
        <p className="text-red-600 text-sm">Minimum deposit 500 BDT</p>
      </div>
      <div className="flex justify-end">
        <button className="py-2 px-5 rounded-md bg-[#0E9C7E] text-white font-bold text-base">
          NEXT
        </button>
      </div>
    </div>
  );
};

export default Withdraw;
