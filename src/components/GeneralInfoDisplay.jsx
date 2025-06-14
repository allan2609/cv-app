export default function GeneralInfoDisplay({ generalInfo }) {
  return (
    <>
      <h2>{generalInfo.firstName} {generalInfo.lastName}</h2>
      <p>{generalInfo.aboutMe}</p>
      <p>Email: {generalInfo.email}</p>
      <p>Phone: {generalInfo.phone}</p>
      <p>Website: {generalInfo.website}</p>
    </>
  );
}
