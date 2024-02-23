import { useState, useEffect } from "react";
import axios from "axios";

const Modify = () => {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/problems");
      setProblems(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/problems/${id}`);
      // After deletion, fetch updated data
      fetchData();
    } catch (error) {
      console.error("Error deleting problem:", error);
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="overflow-x-auto">
          <h1 className="text-2xl font-bold my-4">Modify Problems</h1>
          <table className="table w-full">
            <thead>
              <tr>
                <th className="text-left">Problem Number</th>
                <th className="text-left">Problem Name</th>
                <th className="text-left"> Statement</th>
                <th className="text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {problems.map((problem) => (
                <tr key={problem._id} className="hover:bg-gray-200">
                  <td>{problem.problemNumber}</td>
                  <td>{problem.problemName}</td>
                  <td>
                    <label
                      htmlFor={`my_modal_${problem._id}_statement`}
                      className="btn"
                    >
                      Statement
                    </label>
                    <input
                      type="checkbox"
                      id={`my_modal_${problem._id}_statement`}
                      className="modal-toggle"
                    />
                    <div className="modal" role="dialog">
                      <div className="modal-box">
                        <div className="mockup-window bg-base-100">
                          <div className="flex justify-center px-4 py-16 border-t border-base-300">
                            <code>{problem.problemStatement}</code>
                          </div>
                        </div>
                      </div>
                      <label
                        className="modal-backdrop"
                        htmlFor={`my_modal_${problem._id}_statement`}
                      >
                        Close
                      </label>
                    </div>
                  </td>
                  <td>
                    <button
                      className="btn btn-outline btn-error"
                      type="button"
                      onClick={() => handleDelete(problem._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Modify;
