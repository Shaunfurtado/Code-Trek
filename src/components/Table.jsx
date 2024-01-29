// import React from "react";

const table = () => {
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
          <tr>
            <td>
              <div className="flex items-center gap-3">
                <div>
                  <div className="font-bold">problem name</div>
                  <div className="text-sm opacity-50">problem number</div>
                </div>
              </div>
            </td>
            <td>
              Zemlak, Daniel and Leannon
              <br />
            </td>
            <td>Purple</td>
            <td>
              <a className="link link-primary link-hover">
                {/* {platformName === "Codeforces"
                  ? "🚀"
                  : platformName === "GeeksforGeeks"
                  ? "👓"
                  : platformName === "Leetcode"
                  ? "🐱‍👤"
                  : ""} */}
                Link
              </a>
            </td>

            <td>
              <label htmlFor="my_modal_8" className="btn">
                statement
              </label>
              <input type="checkbox" id="my_modal_8" className="modal-toggle" />
              <div className="modal" role="dialog">
                <div className="modal-box">
                  <h3 className="text-lg font-bold">Problem Statement</h3>
                  <p className="py-4">
                    This modal works with a hidden checkbox!
                  </p>
                </div>
                <label className="modal-backdrop" htmlFor="my_modal_8">
                  Close
                </label>
              </div>
            </td>
            <td>
              <label htmlFor="my_modal_10" className="btn">
                code
              </label>
              <input
                type="checkbox"
                id="my_modal_10"
                className="modal-toggle"
              />
              <div className="modal" role="dialog">
                <div className="modal-box">
                  <h3 className="text-lg font-bold">Solution</h3>
                  <p className="py-4">
                    This modal works with a hidden checkbox!
                  </p>
                </div>
                <label className="modal-backdrop" htmlFor="my_modal_10">
                  Close
                </label>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default table;
