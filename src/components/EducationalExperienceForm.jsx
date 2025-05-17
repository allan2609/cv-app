export default function EducationalExperienceForm() {
  return (
    <>
      <h2>Educational experience</h2>
      <form action="">
        <div>
          <label htmlFor="schoolName" >Name of school</label>
          <input type="text" id="schoolName" required></input>
        </div>
        <div>
          <label htmlFor="studyName" >Title of study</label>
          <input type="text" id="studyName" required></input>
        </div>
        <div>
          <label htmlFor="beginYear" >Begin year</label>
          <input type="number" id="beginYear" required></input>
        </div>
        <div>
          <label htmlFor="graduationYear">Graduation year</label>
          <input type="number" id="graduationYear"></input>
          <div>
            <input type="checkbox" id="isInProgress" />
            <label htmlFor="isInProgress">In progress</label>
          </div>
        </div>
        <button type="submit">Add</button>
      </form>
    </>
  )
}
