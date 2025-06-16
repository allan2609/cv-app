import "./SkillsDisplay.css"

export default function SkillsDisplay ({ skillList }) {
  return (
    <div className="skills-display-section">
      <h2>Skills</h2>
      {skillList.length > 0 ? (
        <ul>
          {skillList.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      ) : (
        <p>No skills added yet.</p>
      )}
    </div>
  );
}
