export default function ProfessionalExperienceForm() {
  return (
    <>
      <h2>Professional experience</h2>
      <form action="">
        <div>
          <label htmlFor="employer" >Employer</label>
          <input type="text" id="employer" required></input>
        </div>
        <div>
          <label htmlFor="position" >Position</label>
          <input type="text" id="position" required></input>
        </div>
        <div>
          <label htmlFor="beginYear" >Begin year</label>
          <input type="number" id="beginYear" required></input>
        </div>
        <div>
          <label htmlFor="endYear">End year</label>
          <input type="number" id="endYear"></input>
          <div>
            <input type="checkbox" id="isCurrentlyEmployed" />
            <label htmlFor="isCurrentlyEmployed">Currently employed</label>
          </div>
        </div>
        <button type="submit">Add</button>
      </form>
    </>
  )
}
