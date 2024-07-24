import { Link } from "react-router-dom";

function Navigation({ user, handleLogout }) {
  console.log(user);
  return (
    <nav>
      <Link to="/">Home</Link>
      {user && <Link to="/activityTimeTracker">Activity Time Tracker App</Link>}
      <Link to="/about">About</Link>
      {user ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <Link to="/login">Login</Link>
      )}
      {!user && <Link to="/register">Register</Link>}
    </nav>
  );
}

export default Navigation;
