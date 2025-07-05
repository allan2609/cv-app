import "./GeneralInfoDisplay.css";

export default function GeneralInfoDisplay({ generalInfo }) {
  return (
    <div className="general-display-section">
      <h2>{generalInfo.firstName} {generalInfo.lastName}</h2>
      <p>{generalInfo.aboutMe}</p>
      <p><span className="label">Email:</span> {generalInfo.email}</p>
      <p><span className="label">Phone:</span> {generalInfo.phone}</p>
      <p><span className="label">Website:</span> {generalInfo.website}</p>
    </div>
  );
}
