
import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");

    // Temporary until Prajan's backend is ready.
    alert("Login form submitted! Backend connection is next.");
  };

  return (
    <main className="form-page">
      <div className="form-container">
        <h1>Welcome Back</h1>

        <p>Log in to your Swap Shop account.</p>

        {error && (
          <p className="form-error">{error}</p>
        )}

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">University Email</label>

          <input
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@example.edu"
            autoComplete="email"
            required
          />

          <label htmlFor="password">Password</label>

          <input
            id="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter your password"
            autoComplete="current-password"
            required
          />

          <button type="submit">Log In</button>
        </form>

        <p>
          Don't have an account?{" "}
          <Link to="/register">Sign Up</Link>
        </p>
      </div>
    </main>
  );
}

export default Login;
