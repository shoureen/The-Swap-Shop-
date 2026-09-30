function Home() {
  return (
    <main className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Buy. Sell. Swap.</h1>

          <p>
            A simple campus marketplace where students
            can find what they need and give their items
            a second life.
          </p>

          <div className="hero-buttons">
            <button>Browse Items</button>

            <button className="secondary-button">
              Sell an Item
            </button>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <h2>How The Swap Shop Works</h2>

        <div className="steps">
          <div className="step">
            <h3>1. Find an Item</h3>
            <p>
              Browse listings from other students.
            </p>
          </div>

          <div className="step">
            <h3>2. Connect</h3>
            <p>
              Find an item that works for you.
            </p>
          </div>

          <div className="step">
            <h3>3. Buy or Swap</h3>
            <p>
              Complete your transaction with another student.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;