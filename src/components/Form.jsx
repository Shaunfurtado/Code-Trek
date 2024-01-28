import { useState } from "react";

const platforms = ["Codeforces", "GeeksforGeeks", "Leetcode"];

const Form = () => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/problems", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="hidden" name="postId" value={formData.postId} />
      <input
        type="text"
        name="problemNumber"
        placeholder="Problem Number"
        value={formData.problemNumber}
        onChange={handleChange}
      />
      <input
        type="text"
        name="problemName"
        placeholder="Problem Name"
        value={formData.problemName}
        onChange={handleChange}
      />
      <input
        type="date"
        name="solvedDate"
        value={formData.solvedDate}
        onChange={handleChange}
      />
      <select
        name="platformName"
        value={formData.platformName}
        onChange={handleChange}
      >
        {platforms.map((platform, index) => (
          <option key={index} value={platform}>
            {platform}
          </option>
        ))}
      </select>
      <input
        type="text"
        name="problemLink"
        placeholder="Problem Link"
        value={formData.problemLink}
        onChange={handleChange}
      />
      <textarea
        name="problemStatement"
        placeholder="Problem Statement"
        value={formData.problemStatement}
        onChange={handleChange}
      />
      <textarea
        name="solution"
        placeholder="Solution"
        value={formData.solution}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
