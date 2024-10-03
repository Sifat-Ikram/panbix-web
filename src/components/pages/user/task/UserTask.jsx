const UserTask = () => {
  const task = [
    { _id: 1, name: "Fix homepage styling issues", action: "Completed" },
    { _id: 2, name: "Add authentication to login page", action: "Completed" },
    { _id: 3, name: "Optimize images for faster loading", action: "Pending" },
  ];

  return (
    <div>
      <div className="flex flex-col justify-center items-start mt-20">
        <div className="bg-white shadow rounded-lg w-4/5 mx-auto p-8">
          <h1 className="text-center text-5xl font-bold mb-10">
            Completed Tasks
          </h1>
          <div className="overflow-x-auto mt-3">
            <table className="table">
              {/* head */}
              <thead className="bg-black rounded-lg">
                <tr>
                  <th className="text-base font-semibold text-white"></th>
                  <th className="text-base font-semibold text-white">Task</th>
                  <th className="text-base font-semibold text-white">Action</th>
                </tr>
              </thead>
              <tbody>
                {task.length > 0 ? (
                  task.map((item, index) => (
                    <tr key={item._id}>
                      <th>
                        <label>{index + 1}</label>
                      </th>
                      <td>
                        <div className="font-bold">{item.name}</div>
                      </td>
                      <td>
                        <div>{item.action}</div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3" className="text-center">
                      <h1>There is no task yet</h1>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserTask;
