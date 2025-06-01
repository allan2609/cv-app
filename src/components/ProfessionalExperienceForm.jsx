export default function ProfessionalExperienceForm({ professionalExperience, setProfessionalExperience }) {

  function handleChange(e) {
    const { name, type, value, checked } = e.target;
    setProfessionalExperience({
      ...professionalExperience,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  return (
    <>
      <h2>Professional experience</h2>
      <form action="">
        <div>
          <label htmlFor="employer" >Employer</label>
          <input name="employer" value={professionalExperience.employer} onChange={handleChange} type="text" id="employer" required></input>
        </div>
        <div>
          <label htmlFor="position" >Position</label>
          <input name="position" value={professionalExperience.position} onChange={handleChange} type="text" id="position" required></input>
        </div>
        <div>
          <label htmlFor="beginYear" >Begin year</label>
          <input name="beginYear" value={professionalExperience.beginYear} onChange={handleChange} type="number" id="beginYear" required></input>
        </div>
        <div>
          <label htmlFor="endYear">End year</label>
          <input name="endYear" value={professionalExperience.endYear} onChange={handleChange} type="number" id="endYear"></input>
          <div>
          <input
              type="checkbox"
              id="isCurrentlyEmployed"
              name="isCurrentlyEmployed"
              checked={professionalExperience.isCurrentlyEmployed}
              onChange={handleChange}
            />
            <label htmlFor="isCurrentlyEmployed">Currently employed</label>
          </div>
        </div>
        <button type="submit">Add</button>
      </form>
    </>
  )
}
