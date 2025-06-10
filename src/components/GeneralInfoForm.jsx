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
      <h2>General information</h2>
      <form action="">
        <div>
          <label htmlFor="aboutMe" >About me</label>
          <input name="aboutMe" value={generalInfo.aboutMe} onChange={handleChange} type="text" id="aboutMe"></input>
        </div>
        <div>
          <label htmlFor="firstName" >First Name</label>
          <input name="firstName" value={generalInfo.firstName} onChange={handleChange} type="text" id="firstName" required></input>
        </div>
        <div>
          <label htmlFor="lastName" >Last Name</label>
          <input name="lastName" value={generalInfo.lastName} onChange={handleChange} type="text" id="lastName" required></input>
        </div>
        <div>
          <label htmlFor="email" >E-mail</label>
          <input name="email" value={generalInfo.email} onChange={handleChange} type="email" id="email" required></input>
        </div>
        <div>
          <label htmlFor="phone">Phone number</label>
          <input name="phone" value={generalInfo.phone} onChange={handleChange} type="tel" id="phone"></input>
        </div>
        <div>
          <label htmlFor="website" >Website</label>
          <input name="website" value={generalInfo.website} onChange={handleChange} type="text" id="website"></input>
        </div>
      </form>
    </>
  )
}
