import { useForm } from "react-hook-form";

const Transaction = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-center text-5xl font-bold mb-10 text-gray-800">
          Transactions
        </h1>
        <div className="bg-white shadow-lg rounded-lg w-4/5 mx-auto p-8">
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Transaction History
            </h2>
            <div className="overflow-x-auto">
              <table className="table-auto w-full text-left">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="px-4 py-2">Date</th>
                    <th className="px-4 py-2">Description</th>
                    <th className="px-4 py-2">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-100">
                    <td className="border px-4 py-2">2024-10-01</td>
                    <td className="border px-4 py-2">Payment to ABC Store</td>
                    <td className="border px-4 py-2">$120.00</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">2024-09-28</td>
                    <td className="border px-4 py-2">Refund from XYZ</td>
                    <td className="border px-4 py-2">-$45.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Add New Transaction
            </h2>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col space-y-4"
            >
              <input
                type="text"
                {...register("description")}
                className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Description"
              />
              <input
                type="number"
                {...register("amount")}
                className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Amount"
              />
              <button type="submit" className="py-2 px-5 rounded-md bg-[#0E9C7E] text-white font-bold text-base w-full">
                Add Transaction
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
