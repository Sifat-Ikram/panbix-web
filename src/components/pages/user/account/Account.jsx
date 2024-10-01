const Account = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-dark p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-medium rounded-lg shadow-lg p-6">
          <div className="flex items-center space-x-4">
            <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-4xl font-semibold text-gray-500">A</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                jhon100
              </h2>
              <p className="text-sm text-gray-500">Mobile: +123 456 789</p>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="bg-blue-100 dark:bg-dark p-4 rounded-lg text-center shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Deposit Balance
              </h3>
              <p className="text-2xl text-blue-600 dark:text-blue-400">0</p>
            </div>
            <div className="bg-green-100 dark:bg-dark p-4 rounded-lg text-center shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Main Balance
              </h3>
              <p className="text-2xl text-green-600 dark:text-green-400">
                $100
              </p>
            </div>
          </div>

          {/* Other Details */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-yellow-100 dark:bg-dark p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                Package
              </h3>
              <p className="text-gray-700 dark:text-gray-300">No package</p>
            </div>
            <div className="bg-purple-100 dark:bg-dark p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                Refer Code
              </h3>
              <p className="text-gray-700 dark:text-gray-300">jhon100</p>
            </div>
            <div className="bg-pink-100 dark:bg-dark p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                Total Refers
              </h3>
              <p className="text-gray-700 dark:text-gray-300">0</p>
            </div>
            <div className="bg-indigo-100 dark:bg-dark p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                Completed Tasks
              </h3>
              <p className="text-gray-700 dark:text-gray-300">0</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
