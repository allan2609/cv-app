export default function SkillsForm ({ skills, setSkills }) {

  function handleSkillChange(index, value) {
    const updatedSkills = [...skills];
    updatedSkills[index] = value;
    setSkills(updatedSkills);
  }

  function handleAddSkill() {
    setSkills([...skills, ""]);
  }

  function handleRemoveSkill(index) {
    setSkills(skills.filter((_, i) => i !== index));
  }

  return (
    <>
      <h2>Skills</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        {skills.map((skill, index) => (
          <div key={index}>
            <input
              type="text"
              value={skill}
              onChange={(e) => handleSkillChange(index, e.target.value)}
              placeholder="Enter a skill"
            />
            {skills.length > 1 && (
              <button type="button" onClick={() => handleRemoveSkill(index)}>Remove</button>
            )}
          </div>
        ))}
        <button type="button" onClick={handleAddSkill}>Add Skill</button>
      </form>
    </>
  );
}
