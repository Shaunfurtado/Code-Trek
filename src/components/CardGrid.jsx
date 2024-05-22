import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card.jsx";

const CardGrid = () => {
  const [problems, setProblems] = useState([]);

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

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mx-auto max-w-screen-xl">
      {problems.map((problem, index) => (
        <div key={index}>
          <Card problem={problem} index={index} />
        </div>
      ))}
    </div>
  );
};

export default CardGrid;
