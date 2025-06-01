export default function EducationalExperienceDisplay({ educationalExperience }) {
  return (
    <>
      <h2>Educational experience</h2>
      <p>School: {educationalExperience.schoolName}</p>
      <p>Title of study: {educationalExperience.studyTitle}</p>
      <p>Begin year: {educationalExperience.beginYear}</p>
      <p>Graduation year: {educationalExperience.graduationYear}</p>
    </>
  );
}
