import { Navigate } from "react-router-dom";
import { useState } from "react";
import AuthService from "../Services/AuthService";

function Login({ user, setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");

    try {
      setUser(await AuthService.login(email, password));
    } catch (err) {
      setError(err.message);
    }
  }

  if (!user)
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
      </div>
    );
  else {
    return <Navigate to="/activityTimeTracker" replace />;
  }
}

export default Login;
