function ListingCard({ listing }) {
  return (
    <div className="listing-card">
      <div className="listing-image">
        <span>No Image</span>
      </div>

      <div className="listing-info">
        <h3>{listing.title}</h3>

        <p className="listing-price">
          ${listing.price}
        </p>

        <p className="listing-condition">
          Condition: {listing.condition}
        </p>

        <p className="listing-description">
          {listing.description}
        </p>

        <div className="listing-footer">
          <span>👁 {listing.views} views</span>

          <button>View Item</button>
        </div>
      </div>
    </div>
  );
}

export default ListingCard;