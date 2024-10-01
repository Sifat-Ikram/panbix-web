import referral from "../../../../assets/images/dashboard/referral.webp";

const Referral = () => {
  return (
    <div className="bg-base-200 min-h-screen py-16 flex flex-col justify-center items-center">
      <img src={referral} alt="" className="h-60 w-60" />
      <div className="w-11/12 mx-auto text-left">
        <h1 className="text-2xl font-semibold text-black mb-2">All Refer: 0</h1>
      </div>
      <div className="w-11/12 mx-auto bg-white rounded-md shadow-lg p-10">
        <h1 className="text-black text-3xl font-bold text-center">
          Your Reference Link
        </h1>
        <div className="flex justify-center items-center relative mt-8">
          <input className="w-96 border rounded-md h-10" />
          <button className="py-2 px-3 rounded-md text-white font-semibold bg-[#0E9C7E]">
            COPY
          </button>
        </div>
        <h1 className="text-gray-700 text-sm font-bold text-center mt-8">
          You will get 10% commission on the amount deposited by the person you
          refer. If your refer joiner deposits 50,000 BDT, then you will get
          instant 5,000 BDT and you can withdraw that money instantly.
        </h1>
      </div>
    </div>
  );
};

export default Referral;
