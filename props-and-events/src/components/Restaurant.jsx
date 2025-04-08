function Restaurant(props) {

  // renders the properties of each restaurant imported from data.js (in RestaurantsContainer.jsx).
  return (
    <div className="restaurant">
      <img src={props.restaurant.image} alt={props.name} />
      <h2>{props.restaurant.name}</h2>
      <ul>
        <li>{props.restaurant.address}</li>
        <li>{props.restaurant.phone}</li>
        <li>{props.restaurant.cuisine}</li>
        <li>{props.restaurant.rating} Stars</li>
      </ul>
    </div>
  );
}

export default Restaurant;
