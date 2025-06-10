export default function SkillsDisplay ({ skills }) {
  return (
    <>
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </>
  );
}
