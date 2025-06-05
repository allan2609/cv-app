export default function EducationalExperienceDisplay({ educationalExperience }) {
  return (
    <>
      <h2>Educational experience</h2>
      <p>School: {educationalExperience.schoolName}</p>
      <p>Title of study: {educationalExperience.studyTitle}</p>
      <p>Begin year: {educationalExperience.beginYear}</p>
      <p>{educationalExperience.isInProgress
        ? <p>Currently studying</p>
        : <p>Graduated in {educationalExperience.graduationYear}</p>}
      </p>
    </>
  );
}
