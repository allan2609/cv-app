export default function SkillsDisplay ({ skillList }) {
  return (
    <>
      <h2>Skills</h2>
      <ul>
        {skillList.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </>
  );
}
