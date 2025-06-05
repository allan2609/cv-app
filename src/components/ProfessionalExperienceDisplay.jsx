export default function ProfessionalExperienceDisplay({ professionalExperience }) {
  return (
    <>
      <h2>Professional experience</h2>
      <p>Employer: {professionalExperience.employer}</p>
      <p>Position: {professionalExperience.position}</p>
      <p>Begin year: {professionalExperience.beginYear}</p>
      <p>{professionalExperience.isCurrentlyEmployed
        ? <p>Currently employed</p>
        : <p>Left in {professionalExperience.endYear}</p>}
      </p>
    </>
  );
}
