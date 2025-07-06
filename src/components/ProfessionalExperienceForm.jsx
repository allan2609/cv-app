import "./ProfessionalExperienceForm.css";

export default function ProfessionalExperienceForm({ professionalExperience, setProfessionalExperience, setWorkList }) {

  function handleChange(e) {
    const { name, type, value, checked } = e.target;
    setProfessionalExperience({
      ...professionalExperience,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  function handleCheckboxChange(e) {
    const checked = e.target.checked;
    setProfessionalExperience({
      ...professionalExperience,
      isCurrentlyEmployed: checked,
      endYear: checked ? "" : professionalExperience.endYear,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setWorkList(prev => [...prev, professionalExperience]);
    setProfessionalExperience({
      employer: "",
      position: "",
      beginYear: "",
      endYear: "",
      isCurrentlyEmployed: false
    });
  }

  return (
    <form onSubmit={handleSubmit} className="work-form-section">
      <h2>Professional experience</h2>
      <div>
        <label htmlFor="employer">Employer</label>
        <input name="employer" value={professionalExperience.employer} onChange={handleChange} type="text" id="employer" required />
      </div>
      <div>
        <label htmlFor="position">Position</label>
        <input name="position" value={professionalExperience.position} onChange={handleChange} type="text" id="position" required />
      </div>
      <div>
        <label htmlFor="beginYear">Begin year</label>
        <input name="beginYear" value={professionalExperience.beginYear} onChange={handleChange} type="number" id="beginYear" required />
      </div>
      <div>
        <label htmlFor="endYear">End year</label>
        <input name="endYear" value={professionalExperience.endYear} onChange={handleChange} type="number" id="endYear" disabled={professionalExperience.isCurrentlyEmployed} />
        <div className="checkbox-group">
          <input
            type="checkbox"
            id="isCurrentlyEmployed"
            name="isCurrentlyEmployed"
            checked={professionalExperience.isCurrentlyEmployed}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="isCurrentlyEmployed">Currently employed</label>
        </div>
      </div>
      <button type="submit">Add</button>
    </form>
  );
}
