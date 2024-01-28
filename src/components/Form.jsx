import { useState } from "react";
import PropTypes from "prop-types";

const platforms = ["Codeforces", "GeeksforGeeks", "Leetcode"];

const Form = ({ handleSubmit }) => {
  const [formData, setFormData] = useState({
    postId: 0,
    problemNumber: "",
    problemName: "",
    solvedDate: "",
    platformName: "",
    problemLink: "",
    problemStatement: "",
    solution: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="card  w-96 bg-neutral text-neutral-content center">
        <form onSubmit={handleSubmit}>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Code Post</h2>
            <div className="form-control w-full max-w-xs">
              <input type="hidden" name="postId" value={formData.postId} />
              <input
                type="text"
                name="problemNumber"
                placeholder="Problem Number"
                className="input input-bordered w-full max-w-xs"
                value={formData.problemNumber}
                onChange={handleChange}
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <input
                type="text"
                name="problemName"
                placeholder="Problem Name"
                className="input input-bordered w-full max-w-xs"
                value={formData.problemName}
                onChange={handleChange}
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <select
                name="platformName"
                className="select select-bordered w-full max-w-xs"
                value={formData.platformName}
                onChange={handleChange}
              >
                {platforms.map((platform, index) => (
                  <option key={index} value={platform}>
                    {platform}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-control w-full max-w-xs">
              <input
                type="text"
                name="problemLink"
                placeholder="Problem Link"
                className="input input-bordered w-full max-w-xs"
                value={formData.problemLink}
                onChange={handleChange}
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <textarea
                name="problemStatement"
                placeholder="Problem Statement"
                className="textarea textarea-lg textarea-bordered w-full max-w-xs"
                value={formData.problemStatement}
                onChange={handleChange}
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <textarea
                name="solution"
                placeholder="Solution"
                className="textarea textarea-lg textarea-bordered w-full max-w-xs"
                value={formData.solution}
                onChange={handleChange}
              />
            </div>
            <div className="card-actions justify-end">
              <button type="submit" className="btn btn-primary">
                Post
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default Form;
