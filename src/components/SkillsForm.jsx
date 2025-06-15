import { useState } from "react";
import "./SkillsForm.css";

export default function SkillsForm ({ skillList, setSkillList }) {
  const [skills, setSkills] = useState([""]);

  function handleChange(e, index) {
    const newSkills = [...skills];
    newSkills[index] = e.target.value;
    setSkills(newSkills);
  }

  function addSkillInput() {
    setSkills([...skills, ""]);
  }

  function removeSkillInput(index) {
    const newSkills = skills.filter((_, i) => i !== index);
    setSkills(newSkills);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const nonEmptySkills = skills.filter((s) => s.trim() !== "");
    setSkillList(nonEmptySkills);
  }

  return (
    <form onSubmit={handleSubmit} className="skills-section">
      <h2>Skills</h2>
      {skills.map((skill, index) => (
        <div className="skill-input-group" key={index}>
          <input
            type="text"
            value={skill}
            onChange={(e) => handleChange(e, index)}
            placeholder={`Skill #${index + 1}`}
          />
          {skills.length > 1 && (
            <button type="button" onClick={() => removeSkillInput(index)}>
              ×
            </button>
          )}
        </div>
      ))}
      <button type="button" className="add-skill-btn" onClick={addSkillInput}>
        Add Skill
      </button>
      <button type="submit" className="add-skill-btn" style={{ marginLeft: "0.5rem" }}>
        Save Skills
      </button>
    </form>
  );
}
