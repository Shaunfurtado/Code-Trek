import { useState, useEffect } from "react";
import axios from "axios";
import CodeforcesLogo from "../assets/Codeforces.colored.svg";
import GeeksforGeeksLogo from "../assets/geeksforgeeks-svgrepo-com";
import LeetcodeLogo from "../assets/leetcode-svgrepo-com.svg";
const platforms = ["Codeforces", "GeeksforGeeks", "Leetcode"];

const getPlatformLogo = (platformName) => {
  switch (platformName) {
    case "Codeforces":
      return <img src={CodeforcesLogo} alt="Codeforces" />;
    case "GeeksforGeeks":
      return <img src={GeeksforGeeksLogo} alt="GeeksforGeeks" />;
    case "Leetcode":
      return <img src={LeetcodeLogo} alt="Leetcode" />;
    default:
      return null;
  }
};

const Table = () => {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    // Fetch problems from the server
    axios
      .get("http://localhost:3000/problems")
      .then((response) => {
        setProblems(response.data);
      })
      .catch((error) => {
        console.error("Error fetching problems:", error);
      });
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="table">
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
                <td>
                  {getPlatformLogo(problem.platformName)}
                  {platforms[problem.platformNumber - 1]}
                </td>
                <td>
                  <a
                    href={problem.problemLink}
                    className="link link-primary link-hover"
                  >
                    Link
                  </a>
                </td>
                <td>
                  <label
                    htmlFor={`my_modal_${problem.id}_statement`}
                    className="btn"
                  >
                    Statement
                  </label>
                  <input
                    type="checkbox"
                    id={`my_modal_${problem.id}_statement`}
                    className="modal-toggle"
                  />
                  <div className="modal" role="dialog">
                    <div className="modal-box">
                      <div className="mockup-window border border-base-300">
                        <div className="flex justify-center px-4 py-16 border-t border-base-300">
                          {problem.problemStatement}
                        </div>
                      </div>
                    </div>
                    <label
                      className="modal-backdrop"
                      htmlFor={`my_modal_${problem.id}_statement`}
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
                      <div className="mockup-code">
                        <pre>
                          <code>{problem.solution}</code>
                        </pre>
                      </div>
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
