export default function ProfessionalExperienceDisplay({ professionalExperience }) {
  return (
    <>
      <h2>Professional experience</h2>
      <p>Employer: {professionalExperience.employer}</p>
      <p>Position: {professionalExperience.position}</p>
      <p>Begin year: {professionalExperience.beginYear}</p>
      <p>End year: {professionalExperience.endYear}</p>
    </>
  );
}
