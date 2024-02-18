import { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const platforms = ["Codeforces", "GeeksforGeeks", "Leetcode"];

// Mapping of platform names to numbers
const platformNumberMapping = {
  Codeforces: 2,
  GeeksforGeeks: 3,
  Leetcode: 4,
};

const Form = ({ handleSubmit }) => {
  const [formData, setFormData] = useState({
    problemNumber: "",
    problemName: "",
    solvedDate: "",
    platformName: "",
    problemLink: "",
    problemStatement: "",
    quickNote: "",
    solution: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();

    // Map platform name to corresponding number
    const platformNumber = platformNumberMapping[formData.platformName];

    // Send the form data to the server with the platform number
    axios
      .post("http://localhost:3000/problems", {
        ...formData,
        platformNumber,
      })
      .then((response) => {
        // Clear the form after successful submission
        setFormData({
          problemNumber: "",
          problemName: "",
          solvedDate: "",
          platformName: "",
          problemLink: "",
          problemStatement: "",
          solution: "",
          quickNote: "", // Ensure quickNote is cleared as well
        });

        // Call the parent handleSubmit function if provided
        if (handleSubmit) {
          handleSubmit(response.data);
        }
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="card w-96 bg-neutral text-neutral-content center">
        <form onSubmit={submitForm}>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Code Post</h2>
            <div className="form-control w-full max-w-xs">
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
              <input
                type="date"
                name="solvedDate"
                className="input input-bordered w-full max-w-xs"
                value={formData.solvedDate}
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
                <option disabled value="" selected>
                  Select Platform
                </option>
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
                name="quickNote"
                placeholder="Quick Notes"
                className="textarea textarea-lg textarea-bordered w-full max-w-xs"
                value={formData.quickNote}
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
  handleSubmit: PropTypes.func,
};

export default Form;
