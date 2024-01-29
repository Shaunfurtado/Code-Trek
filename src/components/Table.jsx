import { useState, useEffect } from "react";
import axios from "axios";

const Table = () => {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5173/problems")
      .then((response) => {
        // Check if the response is an object (JSON data)
        if (typeof response.data === "object") {
          setProblems(response.data.problems);
        } else {
          console.error("Unexpected server response:", response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching problems:", error);
      });
  }, []);
  console.log(problems); // Log the state

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Problem </th>
            <th>Date</th>
            <th>Platform</th>
            <th>Link</th>
            <th>Statement</th>
            <th>Solution</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(problems) && problems.length > 0 ? (
            problems.map((problem) => (
              <tr key={problem.id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="font-bold">{problem.problemName}</div>
                      <div className="text-sm opacity-50">
                        {problem.problemNumber}
                      </div>
                    </div>
                  </div>
                </td>
                <td>{problem.solvedDate}</td>
                <td>{problem.platformName}</td>
                <td>
                  <a
                    href={problem.problemLink}
                    className="link link-primary link-hover"
                  >
                    {problem.platformName === "Codeforces"
                      ? "🚀"
                      : problem.platformName === "GeeksforGeeks"
                      ? "👓"
                      : problem.platformName === "Leetcode"
                      ? "🐱‍👤"
                      : ""}
                    Link
                  </a>
                </td>

                <td>
                  <label htmlFor={`my_modal_${problem.id}`} className="btn">
                    Statement
                  </label>
                  <input
                    type="checkbox"
                    id={`my_modal_${problem.id}`}
                    className="modal-toggle"
                  />
                  <div className="modal" role="dialog">
                    <div className="modal-box">
                      <h3 className="text-lg font-bold">Problem Statement</h3>
                      <p className="py-4">{problem.problemStatement}</p>
                    </div>
                    <label
                      className="modal-backdrop"
                      htmlFor={`my_modal_${problem.id}`}
                    >
                      Close
                    </label>
                  </div>
                </td>
                <td>
                  <label
                    htmlFor={`my_modal_${problem.id}_solution`}
                    className="btn"
                  >
                    Code
                  </label>
                  <input
                    type="checkbox"
                    id={`my_modal_${problem.id}_solution`}
                    className="modal-toggle"
                  />
                  <div className="modal" role="dialog">
                    <div className="modal-box">
                      <h3 className="text-lg font-bold">Solution</h3>
                      <p className="py-4">{problem.solution}</p>
                    </div>
                    <label
                      className="modal-backdrop"
                      htmlFor={`my_modal_${problem.id}_solution`}
                    >
                      Close
                    </label>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No problems available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
