import "./GeneralInfoForm.css";

export default function GeneralInfoForm({ generalInfo, setGeneralInfo }) {

  function handleChange(e) {
    const { name, value } = e.target;
    setGeneralInfo({
      ...generalInfo,
      [name]: value
    });
  }

  return (
    <>
      <form action="" className="general-info-section">
        <h2>General information</h2>
        <div className="form-group">
          <label htmlFor="aboutMe" >About me</label>
          <textarea
            name="aboutMe"
            value={generalInfo.aboutMe}
            onChange={handleChange}
            id="aboutMe"
            rows="4"
          />
        </div>
        <div className="form-group">
          <label htmlFor="firstName" >First Name</label>
          <input name="firstName" autoComplete="given-name" value={generalInfo.firstName} onChange={handleChange} type="text" id="firstName" required></input>
        </div>
        <div className="form-group">
          <label htmlFor="lastName" >Last Name</label>
          <input name="lastName" autoComplete="family-name" value={generalInfo.lastName} onChange={handleChange} type="text" id="lastName" required></input>
        </div>
        <div className="form-group">
          <label htmlFor="email" >E-mail</label>
          <input name="email" autoComplete="email" value={generalInfo.email} onChange={handleChange} type="email" id="email" required></input>
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone number</label>
          <input name="phone" value={generalInfo.phone} onChange={handleChange} type="tel" id="phone"></input>
        </div>
        <div className="form-group">
          <label htmlFor="website" >Website</label>
          <input name="website" value={generalInfo.website} onChange={handleChange} type="text" id="website"></input>
        </div>
      </form>
    </>
  )
}
