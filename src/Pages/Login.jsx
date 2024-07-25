import { Navigate } from "react-router-dom";
import { useState } from "react";

function Login({ user, setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleLogin(email, password) {
    console.log(email);
    const body = JSON.stringify({
      username: email,
      password: password,
    });
    console.log(body);
    const response = await fetch(
      "https://att-api.azurewebsites.net/api/Auth/Login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: email,
          password: password,
        }),
      }
    );

    if (!response.ok) {
      console.log(response);
      throw new Error(
        "Login failed. Check your username or password and try again."
      );
    }
    const data = await response.json();
    console.log(data);
    console.log(data.jwtToken);
    setUser(data.jwtToken);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");

    try {
      await handleLogin(email, password);
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
