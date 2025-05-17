export default function GeneralInfoForm() {
  return (
    <>
      <h2>General information</h2>
      <form action="">
        <div>
          <label htmlFor="firstName" >First Name</label>
          <input type="text" id="firstName" required></input>
        </div>
        <div>
          <label htmlFor="lastName" >Last Name</label>
          <input type="text" id="lastName" required></input>
        </div>
        <div>
          <label htmlFor="email" >E-mail</label>
          <input type="email" id="email" required></input>
        </div>
        <div>
          <label htmlFor="phone">Phone number</label>
          <input type="tel" id="phone"></input>
        </div>
      </form>
    </>
  )
}
