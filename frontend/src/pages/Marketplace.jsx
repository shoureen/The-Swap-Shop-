import { useState } from "react";
import ListingCard from "../components/ListingCard";

function Marketplace() {
  const [search, setSearch] = useState("");

  const listings = [
    {
      id: 1,
      title: "Mini Refrigerator",
      price: 50,
      condition: "Good",
      description:
        "Small dorm refrigerator in good working condition.",
      views: 37,
    },
    {
      id: 2,
      title: "Desk Lamp",
      price: 15,
      condition: "Like New",
      description:
        "Small desk lamp, perfect for a dorm room.",
      views: 21,
    },
    {
      id: 3,
      title: "Calculus Textbook",
      price: 30,
      condition: "Good",
      description:
        "Used calculus textbook with minimal highlighting.",
      views: 14,
    },
    {
      id: 4,
      title: "Twin XL Sheets",
      price: 20,
      condition: "Like New",
      description:
        "Clean Twin XL sheets, barely used.",
      views: 9,
    },
  ];

  const filteredListings = listings.filter((listing) =>
    listing.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="marketplace">
      <section className="marketplace-header">
        <h1>Marketplace</h1>

        <p>
          Find items from other students.
        </p>
      </section>

      <section className="marketplace-controls">
        <input
          type="text"
          placeholder="Search for an item..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <select>
          <option>All Categories</option>
          <option>Textbooks</option>
          <option>Electronics</option>
          <option>Furniture</option>
          <option>Clothing</option>
          <option>Dorm Supplies</option>
          <option>Other</option>
        </select>

        <select>
          <option>Any Condition</option>
          <option>New</option>
          <option>Like New</option>
          <option>Good</option>
          <option>Fair</option>
        </select>
      </section>

      <section className="listing-grid">
        {filteredListings.map((listing) => (
          <ListingCard
            key={listing.id}
            listing={listing}
          />
        ))}
      </section>

      {filteredListings.length === 0 && (
        <p className="no-results">
          No items found.
        </p>
      )}
    </main>
  );
}

export default Marketplace;