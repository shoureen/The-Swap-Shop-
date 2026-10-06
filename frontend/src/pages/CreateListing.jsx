import { useState } from "react";
import { Link } from "react-router-dom";

function CreateListing() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [condition, setCondition] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log({
      title,
      description,
      price,
      category,
      condition,
    });

    alert("Listing created successfully!");
  };

  return (
    <main className="form-page">
      <div className="form-container">

        <Link to="/marketplace">
          ← Back to Marketplace
        </Link>

        <h1>Create a Listing</h1>

        <p>
          Add an item you want to sell or swap.
        </p>

        <form onSubmit={handleSubmit}>

          <label htmlFor="title">
            Item Name
          </label>

          <input
            id="title"
            type="text"
            value={title}
            onChange={(event) =>
              setTitle(event.target.value)
            }
            placeholder="Example: Mini Refrigerator"
            required
          />

          <label htmlFor="description">
            Description
          </label>

          <textarea
            id="description"
            value={description}
            onChange={(event) =>
              setDescription(event.target.value)
            }
            placeholder="Describe your item..."
            rows="5"
            required
          />

          <label htmlFor="price">
            Price
          </label>

          <input
            id="price"
            type="number"
            min="0"
            value={price}
            onChange={(event) =>
              setPrice(event.target.value)
            }
            placeholder="50"
            required
          />

          <label htmlFor="category">
            Category
          </label>

          <select
            id="category"
            value={category}
            onChange={(event) =>
              setCategory(event.target.value)
            }
            required
          >
            <option value="">
              Select Category
            </option>

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

          <label htmlFor="condition">
            Condition
          </label>

          <select
            id="condition"
            value={condition}
            onChange={(event) =>
              setCondition(event.target.value)
            }
            required
          >
            <option value="">
              Select Condition
            </option>

            <option value="New">
              New
            </option>

            <option value="Like New">
              Like New
            </option>

            <option value="Good">
              Good
            </option>

            <option value="Fair">
              Fair
            </option>
          </select>

          <label htmlFor="image">
            Item Image
          </label>

          <input
            id="image"
            type="file"
            accept="image/*"
          />

          <button type="submit">
            Create Listing
          </button>

        </form>
      </div>
    </main>
  );
}

export default CreateListing;