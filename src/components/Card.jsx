const Card = ({ problem }) => {
  // Function to truncate text to 25% of its original length
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    const truncatedText = text.substring(0, maxLength);
    return truncatedText + "...";
  };

  // Function to split quick notes by comma and render them as separate badges
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
          <div className="badge badge-secondary">{problem.solvedDate}</div>
        </h2>
        <p>
          {truncateText(
            problem.problemStatement,
            Math.ceil(problem.problemStatement.length * 0.25)
          )}
        </p>
        <div className="card-actions justify-start">
          <a href={problem.problemLink} className="link">
            Read More
          </a>
        </div>
        <div className="card-actions justify-end">
          {renderQuickNotes(problem.quickNote)}
        </div>
      </div>
    </div>
  );
};

export default Card;
