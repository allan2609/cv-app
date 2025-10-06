import "./ProfessionalExperienceDisplay.css";

export default function ProfessionalExperienceDisplay({ workList, onRemove }) {
  return (
    <div className="work-display-section">
      <h2>Professional experience</h2>
      {workList.map((job, index) => (
        <div key={index} className="work-entry">
          <p><span className="label">Employer:</span> {job.employer}</p>
          <p><span className="label">Position:</span> {job.position}</p>
          <p><span className="label">Begin year:</span> {job.beginYear}</p>
          {job.isCurrentlyEmployed
            ? <p><span className="label">Status:</span> Currently employed</p>
            : <p><span className="label">Left in:</span> {job.endYear}</p>}
            <button onClick={() => onRemove(index)}>Remove</button>
        </div>
      ))}
    </div>
  );
}
