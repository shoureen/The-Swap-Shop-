import { Link, useParams } from "react-router-dom";

function ListingDetails() {
  const { id } = useParams();

  const listing = {
    id: id,
    title: "Mini Refrigerator",
    price: 50,
    condition: "Good",
    description:
      "Small dorm refrigerator in good working condition. Perfect for a college dorm room.",
    views: 37,
    seller: "Student Seller",
    category: "Electronics",
  };

  return (
    <main className="listing-details">
      <Link to="/marketplace" className="back-link">
        ← Back to Marketplace
      </Link>

      <div className="details-container">
        <div className="details-image">
          <span>No Image</span>
        </div>

        <div className="details-info">
          <p className="details-category">
            {listing.category}
          </p>

          <h1>{listing.title}</h1>

          <p className="details-price">
            ${listing.price}
          </p>

          <p className="details-condition">
            Condition: {listing.condition}
          </p>

          <p className="details-views">
            👁 {listing.views} views
          </p>

          <div className="details-section">
            <h2>Description</h2>

            <p>{listing.description}</p>
          </div>

          <div className="details-section">
            <h2>Seller</h2>

            <p>{listing.seller}</p>
          </div>

          <div className="details-buttons">
            <button>Buy Item</button>

            <button className="swap-button">
              Request Swap
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ListingDetails;