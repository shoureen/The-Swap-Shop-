import { useState } from "react";
import ListingCard from "../components/ListingCard";

function Marketplace() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [condition, setCondition] = useState("");

  const listings = [
    {
      id: 1,
      title: "Mini Refrigerator",
      price: 50,
      category: "Electronics",
      condition: "Good",
      description:
        "Small dorm refrigerator in good working condition.",
      views: 37,
    },

    {
      id: 2,
      title: "Desk Lamp",
      price: 15,
      category: "Electronics",
      condition: "Like New",
      description:
        "Small desk lamp, perfect for a dorm room.",
      views: 21,
    },

    {
      id: 3,
      title: "Calculus Textbook",
      price: 30,
      category: "Textbooks",
      condition: "Good",
      description:
        "Used calculus textbook with minimal highlighting.",
      views: 14,
    },

    {
      id: 4,
      title: "Twin XL Sheets",
      price: 20,
      category: "Dorm Supplies",
      condition: "Like New",
      description:
        "Clean Twin XL sheets, barely used.",
      views: 9,
    },

    {
      id: 5,
      title: "Desk Chair",
      price: 25,
      category: "Furniture",
      condition: "Good",
      description:
        "Comfortable desk chair that is perfect for studying.",
      views: 18,
    },

    {
      id: 6,
      title: "Winter Jacket",
      price: 40,
      category: "Clothing",
      condition: "Like New",
      description:
        "Warm winter jacket that has only been worn a few times.",
      views: 12,
    },
  ];

  // Filter listings based on search, category, and condition
  const filteredListings = listings.filter((listing) => {
    const matchesSearch = listing.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "" || listing.category === category;

    const matchesCondition =
      condition === "" || listing.condition === condition;

    return (
      matchesSearch &&
      matchesCategory &&
      matchesCondition
    );
  });

  return (
    <main className="marketplace-page">
      <section className="marketplace">
        <div className="marketplace-header">
          <h1>Marketplace</h1>

          <p>
            Find what you need from other students
            on campus.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="marketplace-controls">
          <input
            type="text"
            placeholder="Search listings..."
            value={search}
            onChange={(event) =>
              setSearch(event.target.value)
            }
          />

          <select
            value={category}
            onChange={(event) =>
              setCategory(event.target.value)
            }
          >
            <option value="">All Categories</option>
            <option value="Textbooks">
              Textbooks
            </option>
            <option value="Electronics">
              Electronics
            </option>
            <option value="Furniture">
              Furniture
            </option>
            <option value="Clothing">
              Clothing
            </option>
            <option value="Dorm Supplies">
              Dorm Supplies
            </option>
            <option value="Other">
              Other
            </option>
          </select>

          <select
            value={condition}
            onChange={(event) =>
              setCondition(event.target.value)
            }
          >
            <option value="">Any Condition</option>
            <option value="New">New</option>
            <option value="Like New">
              Like New
            </option>
            <option value="Good">Good</option>
            <option value="Fair">Fair</option>
          </select>
        </div>

        {/* Results */}
        <div className="marketplace-results">
          <p>
            {filteredListings.length}{" "}
            {filteredListings.length === 1
              ? "listing"
              : "listings"}{" "}
            found
          </p>
        </div>

        {/* Listing Cards */}
        <div className="listing-grid">
          {filteredListings.length > 0 ? (
            filteredListings.map((listing) => (
              <ListingCard
                key={listing.id}
                listing={listing}
              />
            ))
          ) : (
            <div className="no-results">
              <h2>No listings found</h2>

              <p>
                Try changing your search or filters.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default Marketplace;