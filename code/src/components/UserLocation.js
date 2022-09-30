/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable react/react-in-jsx-scope */
const UserLocation = ({ userlocation, setUserlocation }) => {
  const handleUserLocationInputChange = (event) => {
    setUserlocation(event.target.value);
  };

  return (
    <>
      <p className="star-shop" tabIndex="0">What is your nearest physical <span className="star">Star shop</span>⭐? </p>
      <p className="user-p" tabIndex="0">Select one of the options below</p>
      <select className="star-shop-select" value={userlocation} onChange={handleUserLocationInputChange}>
        <option className="star-shop-select-option" value="">Select location</option>
        <option className="star-shop-select-option" value="Stockholm">Stockholm</option>
        <option className="star-shop-select-option" value="Oslo">Oslo</option>
        <option className="star-shop-select-option" value="Malmö">Malmö</option>
        <option className="star-shop-select-option" value="Göteborg">Göteborg</option>
        <option className="star-shop-select-option" value="Umeå">Umeå</option>
      </select>
    </>

  )
}

export default UserLocation;