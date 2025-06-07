export default function ProfessionalExperienceDisplay({ workList }) {
  return (
    <>
      <h2>Professional experience</h2>
      {workList.map((job, index) => (
        <div key={index}>
          <p>Employer: {job.employer}</p>
          <p>Position: {job.position}</p>
          <p>Begin year: {job.beginYear}</p>
          {job.isCurrentlyEmployed
            ? <p>Currently employed</p>
            : <p>Left in {job.endYear}</p>}
        </div>
      ))}
    </>
  );
}
