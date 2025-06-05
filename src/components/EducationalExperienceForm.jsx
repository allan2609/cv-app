export default function EducationalExperienceForm({ educationalExperience, setEducationalExperience }) {

  function handleChange(e) {
    const { name, type, value, checked } = e.target;
    setEducationalExperience({
      ...educationalExperience,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  function handleCheckboxChange(e) {
    const checked = e.target.checked;
    setEducationalExperience({
      ...educationalExperience,
      isInProgress: checked,
      graduationYear: checked ? "" : educationalExperience.graduationYear,
    });
  }

  return (
    <>
      <h2>Educational experience</h2>
      <form action="">
        <div>
          <label htmlFor="schoolName" >Name of school</label>
          <input name="schoolName" value={educationalExperience.schoolName} onChange={handleChange} type="text" id="schoolName" required></input>
        </div>
        <div>
          <label htmlFor="studyTitle" >Title of study</label>
          <input name="studyTitle" value={educationalExperience.studyTitle} onChange={handleChange} type="text" id="studyTitle" required></input>
        </div>
        <div>
          <label htmlFor="beginYear" >Begin year</label>
          <input name="beginYear" value={educationalExperience.beginYear} onChange={handleChange} type="number" id="beginYear" required></input>
        </div>
        <div>
          <label htmlFor="graduationYear">Graduation year</label>
          <input name="graduationYear" value={educationalExperience.graduationYear} onChange={handleChange} type="number" id="graduationYear" disabled={educationalExperience.isInProgress}></input>
          <div>
            <input
              type="checkbox"
              id="isInProgress"
              name="isInProgress"
              checked={educationalExperience.isInProgress}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="isInProgress">In progress</label>
          </div>
        </div>
        <button type="submit">Add</button>
      </form>
    </>
  )
}
