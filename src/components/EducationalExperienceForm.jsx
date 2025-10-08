import "./EducationalExperienceForm.css";

export default function EducationalExperienceForm({ educationalExperience, setEducationalExperience, setEducationList }) {

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

  function handleSubmit(e) {
    e.preventDefault();
    setEducationList(prev => [...prev, educationalExperience]);
    setEducationalExperience({
      schoolName: "",
      studyTitle: "",
      beginYear: "",
      graduationYear: "",
      isInProgress: false
    });
  }  

  return (
    <form onSubmit={handleSubmit} className="education-form-section">
      <h2>Educational experience</h2>
      <div className="form-group">
        <label htmlFor="schoolName">Name of school</label>
        <input name="schoolName" value={educationalExperience.schoolName} onChange={handleChange} type="text" id="schoolName" required />
      </div>
      <div className="form-group">
        <label htmlFor="studyTitle">Title of study</label>
        <input name="studyTitle" value={educationalExperience.studyTitle} onChange={handleChange} type="text" id="studyTitle" required />
      </div>
      <div className="form-group">
        <label htmlFor="beginYear">Begin year</label>
        <input name="beginYear" value={educationalExperience.beginYear} onChange={handleChange} type="number" id="beginYear" required />
      </div>
      <div className="form-group">
        <label htmlFor="graduationYear">Graduation year</label>
        <input name="graduationYear" value={educationalExperience.graduationYear} onChange={handleChange} type="number" id="graduationYear" disabled={educationalExperience.isInProgress} />
        <div className="checkbox-group">
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
  );
}
