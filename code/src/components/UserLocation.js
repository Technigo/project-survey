/* eslint-disable react/react-in-jsx-scope */
const UserLocation = ({ userlocation, setUserlocation }) => {
  const handleUserLocationInputChange = (event) => {
    setUserlocation(event.target.value);
  };

  return (
    <>
      <p>What is your nearest physical Star shop ⭐? </p>
      <p>Select one of the options below</p>
      <select value={userlocation} onChange={handleUserLocationInputChange}>
        <option value="">Select location</option>
        <option value="Stockholm">Stockholm</option>
        <option value="Oslo">Oslo</option>
        <option value="Malmö">Malmö</option>
        <option value="Malmö">Göteborg</option>
        <option value="Umeå">Göteborg</option>
      </select>
    </>

  )
}

export default UserLocation;