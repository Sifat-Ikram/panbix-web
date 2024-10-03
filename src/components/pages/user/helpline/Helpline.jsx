import { useForm } from "react-hook-form";

const Helpline = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="p-10 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Need Help?
      </h1>
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        We are Here for You!
      </h1>

      <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Contact Our Support Team
        </h2>
        <p className="text-gray-600 mb-2">
          <strong>Helpline:</strong> 1-800-123-4567
        </p>
        <p className="text-gray-600 mb-2">
          <strong>Email:</strong> support@yourwebsite.com
        </p>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">
          Need Further Assistance? Contact Us
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Your Name</label>
            <input
              type="text"
              {...register("name")}
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              {...register("email")}
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Message</label>
            <textarea
              {...register("message")}
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Write your message"
            />
          </div>
          <button
            type="submit"
            className="py-2 px-5 rounded-md bg-[#0E9C7E] text-white font-bold text-base w-full transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Helpline;
