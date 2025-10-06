import "./EducationalExperienceDisplay.css";

export default function EducationalExperienceDisplay({ educationList, onRemove }) {
  return (
    <div className="education-display-section">
      <h2>Educational experience</h2>
      {educationList.map((entry, index) => (
        <div key={index} className="education-entry">
          <p>School: {entry.schoolName}</p>
          <p>Title of study: {entry.studyTitle}</p>
          <p>Begin year: {entry.beginYear}</p>
          {entry.isInProgress
            ? <p>Currently studying</p>
            : <p>Graduated in {entry.graduationYear}</p>}
          <button onClick={() => onRemove(index)}>Remove</button>
        </div>
      ))}
    </div>
  );
}
