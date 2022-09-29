/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable react/react-in-jsx-scope */
const UserLocation = ({ userlocation, setUserlocation }) => {
  const handleUserLocationInputChange = (event) => {
    setUserlocation(event.target.value);
  };

  return (
    <>
      <p tabIndex="0">What is your nearest physical Star shop ⭐? </p>
      <p tabIndex="0">Select one of the options below</p>
      <select value={userlocation} onChange={handleUserLocationInputChange}>
        <option value="">Select location</option>
        <option value="Stockholm">Stockholm</option>
        <option value="Oslo">Oslo</option>
        <option value="Malmö">Malmö</option>
        <option value="Göteborg">Göteborg</option>
        <option value="Umeå">Umeå</option>
      </select>
    </>

  )
}

export default UserLocation;