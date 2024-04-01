import { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
  const [problems, setProblems] = useState([]);
  const [totalProblemsSolved, setTotalProblemsSolved] = useState(0);
  const [mostActiveMonth, setMostActiveMonth] = useState("");
  const [mostSolvedPlatforms, setMostSolvedPlatforms] = useState([]);
  const [mostUsedTags, setMostUsedTags] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://shaunfurtado.is-a.dev/Static-APIs/api-data/test.problems.json"
      )
      .then((response) => {
        setProblems(response.data);
      })
      .catch((error) => {
        console.error("Error fetching problems:", error);
      });
  }, []);

  useEffect(() => {
    // Calculate statistics based on the problems data
    // Ensure problems data is not empty
    if (problems.length > 0) {
      // Total number of problems solved
      setTotalProblemsSolved(problems.length);

      // Most active month
      const months = {};
      problems.forEach((problem) => {
        const [year, month] = problem.solvedDate.split("-");
        const monthYear = `${year}-${month}`;
        if (months[monthYear]) {
          months[monthYear]++;
        } else {
          months[monthYear] = 1;
        }
      });
      const maxMonthYear = Object.keys(months).reduce((a, b) =>
        months[a] > months[b] ? a : b
      );
      setMostActiveMonth(maxMonthYear);

      // Most solved platforms
      const platforms = {};
      problems.forEach((problem) => {
        if (platforms[problem.platformName]) {
          platforms[problem.platformName]++;
        } else {
          platforms[problem.platformName] = 1;
        }
      });
      const sortedPlatforms = Object.entries(platforms).sort(
        (a, b) => b[1] - a[1]
      );
      setMostSolvedPlatforms(sortedPlatforms);

      // Most used tags
      const tags = {};
      problems.forEach((problem) => {
        if (problem.quickNote) {
          problem.quickNote.split(",").forEach((tag) => {
            const trimmedTag = tag.trim();
            if (tags[trimmedTag]) {
              tags[trimmedTag]++;
            } else {
              tags[trimmedTag] = 1;
            }
          });
        }
      });
      const sortedTags = Object.entries(tags).sort((a, b) => b[1] - a[1]);
      setMostUsedTags(sortedTags);
    }
  }, [problems]);

  return (
    <div className="flex justify-center">
      <div className="stats stats-vertical lg:stats-horizontal shadow">
        <div className="stat">
          <div className="stat-title">Total Problems Solved</div>
          <div className="stat-value">{totalProblemsSolved}</div>
        </div>

        <div className="stat">
          <div className="stat-title">Most Active Month</div>
          <div className="stat-value">{mostActiveMonth}</div>
        </div>

        <div className="stat">
          <div className="stat-title">Most Solved Platforms</div>
          <div className="stat-value">
            {mostSolvedPlatforms.map(([platform, count]) => (
              <div key={platform}>
                {platform}: {count}
              </div>
            ))}
          </div>
        </div>

        <div className="stat">
          <div className="stat-title">Most Used Tags</div>
          <div className="stat-value">
            {mostUsedTags.map(([tag, count]) => (
              <div key={tag}>
                {tag}: {count}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
