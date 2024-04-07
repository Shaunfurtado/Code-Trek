import CodeforcesLogo from "../assets/Codeforces.colored.svg";
import GeeksforGeeksLogo from "../assets/geeksforgeeks-svgrepo-com.svg";
import LeetcodeLogo from "../assets/leetcode-svgrepo-com.svg";
const platforms = ["Codeforces", "GeeksforGeeks", "Leetcode"];

const getPlatformLogo = (platformName) => {
  switch (platformName) {
    case "Codeforces":
      return (
        <img src={CodeforcesLogo} alt="Codeforces" width="30" height="30" />
      );
    case "GeeksforGeeks":
      return (
        <img
          src={GeeksforGeeksLogo}
          alt="GeeksforGeeks"
          width="30"
          height="30"
        />
      );
    case "Leetcode":
      return <img src={LeetcodeLogo} alt="Leetcode" width="30" height="30" />;
    default:
      return null;
  }
};

const Card = ({ problem, index }) => {
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    const truncatedText = text.substring(0, maxLength);
    return truncatedText + "...";
  };

  const renderQuickNotes = (quickNotes) => {
    if (!quickNotes) return null;

    const notesArray = quickNotes.split(",").map((note, index) => (
      <div key={index} className="badge badge-outline">
        {note.trim()}
      </div>
    ));

    return notesArray;
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">
          {problem.problemName}
          <div className="badge badge-secondary ">{problem.solvedDate}</div>
        </h2>
        <p>
          {truncateText(
            problem.problemStatement,
            Math.ceil(problem.problemStatement.length * 0.25)
          )}
        </p>
        <label htmlFor={`modal_toggle_${index}`} className="btn btn-md">
          Read More
        </label>
        <input
          type="checkbox"
          id={`modal_toggle_${index}`}
          className="modal-toggle"
        />
        <div className="modal" role="dialog" id={`modal_${index}`}>
          <div className="modal-box">
            <div className="mockup-browser border border-base-300">
              <div className="mockup-browser-toolbar">
                <div className="input border border-base-300">
                  <div>
                    <div className="font-bold">
                      {problem.problemNumber} . {problem.problemName}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                {getPlatformLogo(problem.platformName)}
                {platforms[problem.platformNumber - 1]}
                <div>
                  <div className="badge badge-ghost">
                    <h3>Tags : </h3>
                    <pre data-prefix=" "></pre>
                    <code>{problem.quickNote}</code>
                  </div>
                  <br />
                  <div className="badge badge-ghost">
                    Solved Date : {problem.solvedDate}
                  </div>
                  <div className="badge badge-success ">
                    <a
                      href={problem.problemLink}
                      className="link link-primary link-hover"
                    >
                      Problem Link
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex justify-center px-4 py-6 border-t border-base-300">
                <code>
                  <h3>Problem Statement : </h3>
                  <br />
                  {problem.problemStatement}
                </code>
              </div>
              <div className="flex px-4 py-6 border-t border-base-300">
                <code>
                  <h3>Solution : </h3>
                  <br />
                  <pre data-prefix="">{problem.solution}</pre>
                </code>
              </div>
            </div>
          </div>
          <label className="modal-backdrop" htmlFor={`modal_toggle_${index}`}>
            Close
          </label>
        </div>
        <div className="card-actions justify-end">
          {renderQuickNotes(problem.quickNote)}
        </div>
      </div>
    </div>
  );
};

export default Card;
