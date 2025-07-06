import "./EducationalExperienceDisplay.css";

export default function EducationalExperienceDisplay({ educationList }) {
  return (
    <div className="education-display-section">
      <h2>Educational experience</h2>
      {educationList.map((entry, index) => (
        <div key={index} className="education-entry">
          <p><span className="label">School:</span> {entry.schoolName}</p>
          <p><span className="label">Title of study:</span> {entry.studyTitle}</p>
          <p><span className="label">Begin year:</span> {entry.beginYear}</p>
          {entry.isInProgress
            ? <p><span className="label">Status:</span> Currently studying</p>
            : <p><span className="label">Graduated in:</span> {entry.graduationYear}</p>}
        </div>
      ))}
    </div>
  );
}
