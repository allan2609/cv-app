export default function EducationalExperienceDisplay({ educationList }) {
  return (
    <>
      <h2>Educational experience</h2>
      {educationList.map((entry, index) => (
        <div key={index}>
          <p>School: {entry.schoolName}</p>
          <p>Title of study: {entry.studyTitle}</p>
          <p>Begin year: {entry.beginYear}</p>
          {entry.isInProgress
            ? <p>Currently studying</p>
            : <p>Graduated in {entry.graduationYear}</p>}
        </div>
      ))}
    </>
  );
}
