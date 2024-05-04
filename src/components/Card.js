
const Card = ({item, isFavorite, setterFn}) => {
  return (
    <div className='card'>
      <img src={item.img} alt='' className='hotel-image' />
      <h3>{item.name}</h3>
      <p>{item.location}</p>
      <p>Rs. {item.price}</p>
      <button className='wishlist-btn' onClick={() => {
        setterFn(item.id);
      }}>{isFavorite ? "Add to Wishlist" : "Remove from Wishlist"}</button>
    </div>
  );
}

export default Card
