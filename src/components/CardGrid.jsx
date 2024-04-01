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
    <div className="flex flex-col justify-center items-center">
      {[...Array(Math.ceil(problems.length / 3))].map((_, rowIndex) => (
        <div
          key={rowIndex}
          className="flex justify-center items-center mb-28 sm:mb-0"
        >
          {[...Array(3)].map((_, colIndex) => {
            const index = rowIndex * 3 + colIndex;
            if (index < problems.length) {
              return (
                <div key={index} className="mx-14 sm:mx-2">
                  <Card problem={problems[index]} />
                </div>
              );
            }
            return null;
          })}
        </div>
      ))}
    </div>
  );
};

export default CardGrid;
